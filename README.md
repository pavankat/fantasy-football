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
### 8-28-18:

2017 stats:

lower the better for these rankings

wrs/qbs:

126.6000    Saints

135.0500    Packers

142.0000    Falcons

143.5000    Browns

160.1000    Bears

168.3500    Steelers

181.0000    Bills

183.2000    Titans

189.2500    Chargers

196.2000    Colts

196.7000    Raiders

196.9500    Buccaneers

197.0500    Jets

201.6500    Panthers

207.1500    Lions

211.2000    Redskins

212.6500    Eagles

216.6500    49ers

218.1500    Dolphins

221.1500    Cowboys

226.7000    Bengals

229.3000    Jaguars

234.5000    Patriots

242.9000    Cardinals

245.3500    Vikings

246.6000    Rams

264.2000    Chiefs

272.6000    Ravens

273.0000    Giants

304.4500    Broncos

308.7000    Seahawks

311.1500    Texans


defense:

116.4   Texans

128.0   Jaguars

151.0   Cardinals

158.0   Titans

158.8   Colts

165.2   Patriots

166.0   Giants

172.4   Seahawks

178.8   Eagles

180.0   Raiders

180.4   Bengals

180.8   Steelers

182.6   Panthers

190.6   Chiefs

192.2   Broncos

194.8   Vikings

195.0   Dolphins

195.2   Falcons

195.6   Cowboys

201.6   Redskins

202.0   Rams

203.2   Ravens

211.2   Bills

214.8   Saints

219.2   49ers

220.8   Buccaneers

222.8   Chargers

228.8   Browns

232.0   Packers

234.0   Lions

247.2   Jets

256.6   Bears


rbs:

117.6500    Steelers

138.5500    Falcons

142.2750    Eagles

150.9875    Raiders

151.5625    Packers

162.7125    Cowboys

163.9125    Patriots

165.3375    Titans

176.3625    Panthers

191.2000    Vikings

192.6750    Saints

194.4625    Browns

198.4250    Bears

201.0000    Cardinals

201.9375    Jaguars

202.8375    Redskins

208.1000    Chiefs

211.0250    Bills

232.8625    Giants

240.6875    Dolphins

246.7625    Chargers

248.7875    Buccaneers

250.7125    Ravens

254.9125    Bengals

258.6750    Broncos

263.8875    Lions

264.2625    Seahawks

266.8125    Texans

272.4250    Colts

277.5250    Rams

282.5125    Jets

332.1625    49ers



-------

2018 stats:

lower the better for these rankings

wrs/qbs:

141.1500    Colts

141.7500    Raiders

145.9500    Chargers

153.8000    Falcons

155.3000    Packers

169.8000    Browns

171.0000    Bengals

174.8000    Steelers

175.6000    49ers

177.4500    Cowboys

194.4500    Buccaneers

197.4000    Lions

199.0500    Dolphins

199.2000    Giants

199.9500    Jets

200.0500    Titans

203.9000    Saints

204.1500    Patriots

205.2000    Cardinals

207.7500    Redskins

211.4000    Chiefs

211.6000    Seahawks

225.4000    Rams

235.8000    Broncos

238.1500    Bears

242.8000    Ravens

244.0000    Texans

246.1000    Eagles

251.6500    Panthers

267.3500    Vikings

268.5000    Bills

271.7000    Jaguars


defense:

128.4   Vikings

148.4   Bears

149.2   Jaguars

151.2   Lions

153.6   Broncos

156.0   Texans

164.2   Chiefs

167.0   Rams

173.2   Ravens

174.8   Packers

179.6   Eagles

180.4   Titans

181.2   Panthers

187.4   Falcons

189.4   Patriots

190.4   Chargers

191.2   Redskins

194.0   Raiders

196.0   Bills

200.6   Steelers

204.4   Saints

205.2   Buccaneers

207.0   Browns

211.4   Giants

213.2   Colts

214.4   Cardinals

214.8   Bengals

220.4   Jets

223.2   Seahawks

239.8   49ers

241.2   Cowboys

242.0   Dolphins



rbs:

97.7500    Steelers

102.2000    Saints

128.5625    Eagles

128.8875    Falcons

149.6000    Rams

160.9125    Packers

162.3250    Lions

167.6625    Raiders

170.4125    Titans

180.3375    Patriots

183.6250    Jaguars

183.8500    Chargers

201.0500    Ravens

201.1750    Cowboys

209.3875    Colts

210.1250    Vikings

219.5125    Bears

221.1875    Redskins

223.8000    Bengals

225.3000    Broncos

226.3500    Cardinals

233.9000    49ers

235.0625    Panthers

241.9500    Browns

244.3750    Texans

244.7000    Seahawks

254.2500    Giants

260.5000    Chiefs

273.5750    Buccaneers

292.7125    Dolphins

307.5750    Bills

310.4000    Jets




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

```
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
```

and wrs + qbs:

```    
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
```

and def:

``` 
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
```

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



