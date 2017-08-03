# Implemented three scraping techniques:

### 1. close to automated

* used the fs node package to create a csv of urls to scrape based on data on the page
* used http://www.csvjson.com/csv2json to convert the csv to a json array of objects that I use in the nightmare.js script 
* nightmare.js - headless browser to tackle content loaded in via js
	* curl and request are both primitive and won't handle content loaded in via ajax
* bash script - runs the nightmare js script while passing in an incrementing value every 10 seconds
* cheerio - to parse the html returned from nightmare

creating a csv of urls looks unnecessary, but it's easier to debug what url failed when all your urls that you're scraping are in order and you can reference them by their index number.

the bash script looks unnecessary, but debugging bad responses within loops of setTimeouts and promises is very tricky and a waste of time.

in practice, headless browser scraping works well on one page, but that's not easy when you are scraping thousands of pages. Unless, you write a simple shell script.

### 2. kind of automated

1. copy and paste content into excel 
2. split the data on delimiters using text to columns 
3. select content and transpose it
4. manually join each team's schedule via cut and paste in excel

### 3. manual

manually create a csv file (ex. offense-rankings.csv)

# current formulas

wide receivers: 
=0.25*('offensive line rankings'!B2)+0.75*(32-'defense rankings'!B2+1)

running backs:
=0.75*('offensive line rankings'!B2)+0.25*('defense rankings'!B2)

# Steals I think

hunter henry	

zach ertz

kelvin benjamin

john brown	

cameron merideth

Tyrell Williams - Los Angeles Chargers	

Marquise Goodwin - San Francisco 49ers

Marqise Lee - Jaguars

ty montgomery

leg blount

dalvin cook

did
-----
8-2-17:

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

8-1-17:

organized folder structure. 

finished new nfl schedule scraper. Currently scraping in data. Abandoned the old way, because even with manipulation it had extra games some how.

7-30-17:

scraping in all of the nfl data. Somehow i'm missing 2016 rushing data. Should be interesting to see what I messed up haha.

A lot of the data scraped in, but i'm not sure where it failed. It went really far. Immediately I need to 2017 and 2016 data immediately so I'll priortize that.

7-28-17:

got all the page numbers for each nfl link

wrote a shell script to run a node cmd and pass in an incrementing value 435 times

that was easier than getting all the promises and setTimeouts to work. 

started using excel to get rid of duplicates in schedule csv but it was off 

started a jupyter notebook with pandas to get rid of duplicates, I put in my comments on how to continue at the end of the notebook

7-27-17:

finished all the mockdraftable scraping

I had to clean some of the csvs because if the player had Jr. it spilled into the next cell. But it went smooth overall.

started to scrape nfl data on aggregate metrics on the season. I'm going to need to grab the page numbers, do rate limiting so I can grab all of the data on every page and then do it per year

7-18-17: 

scraped dbs into csv, few more to go and then the harder part lol of getting the individual data for each person.

7-17-17: 

I scraped in player links for qbs and offensive players (hbs, fbs, wrs, tes)

I put the data into csvs and then I manually checked the data to see if there were any errors. I fixed 5 or so issues. Some of the data didn't exist on the site and some of the data got tampered when there was a Jr. on the name.

I need to finish scraping the data for defense players and offensive line players

Then I need to start scraping their individual information

immediate to do 
-----
* might want to switch o line rankings to https://www.fantasypros.com/2017/07/nfl-offensive-line-rankings-and-fantasy-impact/ OR add that in with profootball to see which one is better

* be sure to import as 2017 data - have a year column for everything

* create teams table

* import nfl-schedule-2017.csv

* import offense-rankings.csv

* delete duplicate games in nfl-schedule-2017 table and in other tables

* need to use the schedule to really deep dive into who the weekly winners are and if there's a streak of having a really good opportunity (ex. weeks 1-6 use ameer abdullah and then it's downhill for him so trade him away then)

* need to add qb rankings to wide receivers and wide receiver rankings to rbs (opens up rb lanes)


