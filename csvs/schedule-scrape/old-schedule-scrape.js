//usage:
//node old-schedule-scrape.js 2017 1

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
          show: false
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
        var liTextMod = liText.replace(/\s\s+/g, ' ').replace(/FINAL /g, '');

        var games = liTextMod.split(' Share ');

        gamesChanged = games.map(function(el){
          var upTo = el.indexOf(' Full Game');
          var partOfEl = el.slice(0, upTo);
          return partOfEl.split(' ');
        });
        
        finalGamesChanged = gamesChanged.map(function(el){
          el.push(yearToScrape, weekToScrape)
          return el;
        });

        console.log(finalGamesChanged); //worked

        for (var i=0; i<finalGamesChanged.length; i++){
          fs.appendFile('old-cleaned-schedule.csv', finalGamesChanged[i].join(',') + "\n", 'utf8', function (err) {
            if (err) {
              console.log('Some error occured - file either not saved or corrupted file saved.');
            } else{
              console.log('It\'s saved!');
            }
          });
        }
      });
}