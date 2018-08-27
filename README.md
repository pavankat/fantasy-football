# two ways to get data

### 1. close to automated

* used the fs node package to create a csv of urls to scrape based on data on the page
* used http://www.csvjson.com/csv2json to convert the csv to a json array of objects that I use in the nightmare.js script 
* nightmare.js - headless browser to tackle content loaded in via js
	* curl and request are both primitive and won't handle content loaded in via ajax
* bash script - runs the nightmare js script while passing in an incrementing value every 10 seconds
* cheerio - to parse the html returned from nightmare

creating a csv of urls looks unnecessary, but it's easier to debug what url failed when all your urls that you're scraping are in order and you can reference them by their index number.

the bash script looks unnecessary, but debugging bad responses within loops of setTimeouts and promises is very tricky and a waste of time.

in practice, headless browser scraping works well on one page, but difficult when scraping thousands of pages. That's why I wrote a simple shell script.

### 2. manual

manually create a csv file (ex. offense-rankings.csv)

# current formulas

doing a weighted mean utilizing different projections

check out db/schema.sql for the sql query used to do this

* wr
    * 60%
        * 50% bad defense
        * 25% good offensive line
        * 25% good offense
    * 40% opponent has bad defense

* rb
	* 45%
	    * 75% good offensive line
	    * 25% good defense
	* 20% good offense
	* 35% opponent has bad defense

* kicker
    * 40% bad offensive line,
    * 20% good offense
    * 20% good defense,
    * 20% opponent good defense

* defense 
    * 40% bad opponent offense
    * 20% good defense
    * 40% bad opponent offensive line

# journal
-----
### 8-26-18:

scraped in 2018 schedule data into csv -> csvs/schedule-scrape/2018-cleaned-schedule.csv

appended to schedules table

using SQL query I added in the seeds.sql file

got the offensive line and defense rankings into csvs and imported them in

I put offense rankings into a csv and imported them in

However, I disagreed with the rankings a bit. I put in my reasons

was 18 WORSE because no running game
    down to 22

oak 22 BETTER because carr isn't hurt
    up to 18

baltimore 28 BETTER because flacco cares
    up to 26

    change bills to 28

    change chicago to 27

jac 29 BETTER because bortles is back
    up to 27

    change chi to 28

    change bills to 29

denver 30 BETTER because keenum and royce
    up to 29

    switch bills to 29

I kept getting this 

Error : ERROR:  cannot change name of view column "" to ""

when I attempted to update the VIEWs

so CREATE OR REPLACE is a lie. It doesn't replace!!!

You have to DROP THE VIEW and rerun it. 

Wow.

so I added these to my schema.sql file:

DROP VIEW sched_plus_rankings_transforms;
DROP VIEW sched_plus_rankings;

I then added the following to sched_plus_rankings

s.year 

and

WHERE s.year = '2018' AND away_defs.year = '2018' AND home_defs.year = '2018'

I knew it was correct when it returned 256 results, which is the number of games played in a NFL season

Then I was able to run this for rbs:

    WITH rbs AS (
    (SELECT st.away_rb_ranking as ranking, st.away as team
            FROM sched_plus_rankings_transforms st
            ORDER BY st.away_rb_ranking ASC)
    UNION
    (SELECT st.home_rb_ranking as ranking, st.home as team
            FROM sched_plus_rankings_transforms st
            ORDER BY st.home_rb_ranking ASC))
    SELECT SUM(ranking) as ranking_sum, team
    FROM rbs
    GROUP BY team
    ORDER BY ranking_sum ASC;

and wrs + qbs:
    
    WITH wrs AS (
    (SELECT st.away_wr_ranking as ranking, st.away as team
            FROM sched_plus_rankings_transforms st
            ORDER BY st.away_wr_ranking ASC)
    UNION
    (SELECT st.home_wr_ranking as ranking, st.home as team
            FROM sched_plus_rankings_transforms st
            ORDER BY st.home_wr_ranking ASC))
    SELECT SUM(ranking) as ranking_sum, team
    FROM wrs
    GROUP BY team
    ORDER BY ranking_sum ASC;

and def:
    
    WITH defs AS (
    (SELECT st.away_defence_ranking as ranking, st.away as team
            FROM sched_plus_rankings_transforms st
            ORDER BY st.away_defence_ranking ASC)
    UNION
    (SELECT st.home_defence_ranking as ranking, st.home as team
            FROM sched_plus_rankings_transforms st
            ORDER BY st.home_defence_ranking ASC))
    SELECT SUM(ranking) as ranking_sum, team
    FROM defs
    GROUP BY team
    ORDER BY ranking_sum ASC;

also found these relevant links

    http://fftoday.com/stats/playerstats.php?Season=2017&GameWeek=&PosID=50&LeagueID=&order_by=Sack&sort_order=DESC

    http://fftoday.com/stats/playerstats.php?Season=2017&GameWeek=&PosID=70&LeagueID=&order_by=INTRet&sort_order=DESC

    http://www.fftoday.com/stats/fantasystats.php?o=2&TeamID=9020&Season=2017&PosID=99&Side=Scored&LeagueID=
    
### 8-12-17:

finally got down to the query that'll give me a virtual ranking of the players based on the weighted mean for weeks 1-4 (without double counting team) and ordered by the draft round and then the ranking

I had to use a window function called dense rank

### 8-2-17:

finished old schedule scraper. Scraped to 1999.

Started a notebook to figure out which teams have best ops for wrs, rbs, qbs based on team rankings and schedule

The python notebook taught me how to use dataframes with multiple merges. The issue with this is that it's a ton of code. In SQL you can accomplish the samething in fewer lines. 

One issue with dealing with csvs and data frames is that a modification to the csv file using excel turns the commas to tabs.

Then you have to go into the notebook and update the way you load the csv in.

Also, if you rename a column in the csv, you have to rename everything in your notebook. Accidentally modifying a csv is easier than accidentally modifying a database table.

Using SQL instead of CSVs let's you use the data for a website in a scalable way (you won't have to load the entire dataset to display one row).

In schema.sql, I wrote the table structure for rankings, teams and schedules. I also loaded the csv data into them.

In seeds.sql, I wrote the csv imports in.

I also ran the following query to dump the database:

```
pg_dump -Ft fantasy_football > db.tar
```

I started writing the relevant queries into queries.sql

almost done with the overall schedule rankings

### 8-1-17:

organized folder structure. 

finished new nfl schedule scraper. Currently scraping in data. Abandoned the old way, because even with manipulation it had extra games some how.

### 7-30-17:

scraping in all of the nfl data. Somehow i'm missing 2016 rushing data. Should be interesting to see what I messed up haha.

A lot of the data scraped in, but i'm not sure where it failed. It went really far. Immediately I need to 2017 and 2016 data immediately so I'll priortize that.

### 7-28-17:

got all the page numbers for each nfl link

wrote a shell script to run a node cmd and pass in an incrementing value 435 times

that was easier than getting all the promises and setTimeouts to work. 

started using excel to get rid of duplicates in schedule csv but it was off 

started a jupyter notebook with pandas to get rid of duplicates, I put in my comments on how to continue at the end of the notebook

### 7-27-17:

finished all the mockdraftable scraping

I had to clean some of the csvs because if the player had Jr. it spilled into the next cell. But it went smooth overall.

started to scrape nfl data on aggregate metrics on the season. I'm going to need to grab the page numbers, do rate limiting so I can grab all of the data on every page and then do it per year

### 7-18-17: 

scraped dbs into csv, few more to go and then the harder part lol of getting the individual data for each person.

### 7-17-17: 

I scraped in player links for qbs and offensive players (hbs, fbs, wrs, tes)

I put the data into csvs and then I manually checked the data to see if there were any errors. I fixed 5 or so issues. Some of the data didn't exist on the site and some of the data got tampered when there was a Jr. on the name.

I need to finish scraping the data for defense players and offensive line players

Then I need to start scraping their individual information

### immediate to do 
-----
* might want to switch o line rankings to https://www.fantasypros.com/2017/07/nfl-offensive-line-rankings-and-fantasy-impact/ OR add that in with profootball to see which one is better

* need to add qb rankings to wide receivers and wide receiver rankings + qb rankings to rbs (opens up rb lanes and better passes mean more yards and accurate red zone targets)

* scrape mockdraftable data

* scrape playerprofiler data

* scrape roster data

----

psql -d fantasy_football -U pavankatepalli



