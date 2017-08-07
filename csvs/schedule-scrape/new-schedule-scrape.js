//usage:
//node new-schedule-scrape.js 2017 1

var Nightmare = require('nightmare');
var cheerio = require('cheerio');
var fs = require('fs'); //internal

var yearToScrape = process.argv[2];

//1-17
var urls = [];
for (var i=1; i<=17; i++){
  urls.push(`http://www.nfl.com/schedules/${yearToScrape}/REG${i}`)
}

var weekToScrape = parseInt(process.argv[3]);

scrape(urls[weekToScrape-1]);

function scrape(url){
  console.log(url);
  var scrape = new Nightmare({
          show: true
      })
      .goto(url)
      .evaluate(function() {
          return document.body.innerHTML;
      }).end().then(function(html) {
        if (html == undefined) {
          console.log('========================');
          console.log('html not there!');
          console.log(arg);
          console.log('========================');
          return;
        }

        var $ = cheerio.load(html);

        //has all the games
        var gamesPlayed = $('ul.schedules-table');
        var lis = gamesPlayed.children('.schedules-list-matchup');
        var liText = lis.text().trim();
        var liTextMod = liText.replace(/\s\s+/g, ' ');

        var games = liTextMod.split(' Share ');

        console.log(games);

        gamesChanged = games.map(function(el){
          return el.split(' ET ');
        });
        
        console.log(gamesChanged);

        gamesChangedAgain = gamesChanged.map(function(el){
          var week = weekToScrape;
          var time = el[0];
          var awayHome = el[1].split(' at ');

          return [week, time, awayHome];
        });

        console.log(gamesChangedAgain);

        //flatten the array and get rid of Share if it's still there
        gamesFlattened = gamesChangedAgain.map(function(el){
          var flat = (el.join(",").replace(' Share', '')).split(',');
          flat.push(yearToScrape);
          return flat;
        });

        console.log(gamesFlattened);

        for (var i=0; i<gamesFlattened.length; i++){
          fs.appendFile('new-cleaned-schedule.csv', gamesFlattened[i].join(',') + "\n", 'utf8', function (err) {
            if (err) {
              console.log('Some error occured - file either not saved or corrupted file saved.');
            } else{
              console.log('It\'s saved!');
            }
          });
        }
      });
}