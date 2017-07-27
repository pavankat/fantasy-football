var request = require('request');
var cheerio = require('cheerio')
var fs = require('fs'); //internal

var year = 1999;

//only did top 50 for each season from 2016 to 1999 -> I should do all the pages - but this needs to grab the page numbers too
//this also only grabs regular season, I should grab the pre season and post season to see if there's any correlation

request('http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=PASSING&conference=null&season=' + year + '&seasonType=REG&d-447263-s=PASSING_YARDS&d-447263-o=2&d-447263-n=1', function(error, response, body) {

    var $ = cheerio.load(body);

    var tableRows = $('tr')

    //Player, Team, Comp, Att, Yards, Tds, interceptions

    //skip first row
    tableRows.slice(1).each(function(i, element) {
        var cleanRow = [];
        //no need to filter - I want it all
          // var justThese = [1, 2, 4, 5, 8, 11, 12];
        var tds = $(element).children('td');

        tds.each(function(tdIndex, td) {
          var val = $(this).text().trim();

          //if there's a comma in the value then replace it with no comma (otherwise the csv will put 5,200 into two cells instead of one cell)
          if (val.indexOf(',') > -1) val = val.replace(',','');
          
          cleanRow.push(val);
        });

        //no need to filter - I want it all
          // var filteredRow = cleanRow.filter(function(el, i) {
          //     if (justThese.indexOf(i) >= 0) return el;
          // });

        fs.appendFile('agg-passing-yards-per-year.csv', cleanRow + "," + year + "\n", 'utf8', function (err) {
          if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
          } else{
            console.log('It\'s saved!');
          }
        });
    });
});