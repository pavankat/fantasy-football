# Implemented three scraping techniques:

### 1. 

* nightmare.js - headless browser to tackle content loaded in via js (curl or request are both too primitive to handle this)
* bash script - runs the node file (containing the nightmare code) while passing in an incrementing value every 10 seconds
* cheerio - to parse the html returned from nightmare

at first glance, the bash script looks unnecessary, but debugging bad responses within loops of setTimeouts and promises is very tricky

in practice, headless browser scraping works well on one page, but that's not easy when you are scraping thousands of pages. Unless, you write a simple shell script.

### 2. cool way

* nightmare.js - headless browser to tackle content loaded in via js
* cheerio - to parse the html returned from nightmare

### 2. not cool way

copy and paste content into excel 

1. split the data on delimiters using text to columns 
2. select content and transpose it
3. manually join each team's schedule via cut and paste in excel

### 3. really not cool way

manually create a csv file (ex. offense-rankings.csv)

it might have been faster to implement a nightmare script for num 2 and 3

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
7-27-17:

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


