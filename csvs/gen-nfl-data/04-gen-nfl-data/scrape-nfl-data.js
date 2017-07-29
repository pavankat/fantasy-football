var request = require('request');
var cheerio = require('cheerio')
var fs = require('fs'); //internal

function uniq(a) {
   return Array.from(new Set(a));
}

//only did top 50 for each season from 2016 to 1999 -> I should do all the pages - but this needs to grab the page numbers too
//this also only grabs regular season, I should grab the pre season and post season to see if there's any correlation

request(url, function(error, response, body) {

    var $ = cheerio.load(body);

    //print out page numbers for now
    var span = $('span.linkNavigation');
    var linksInSpan = span.children('a');
    var pageNums = [];

    linksInSpan.each(function(i, element) {
      pageNums.push($(element).text());
    });

    var uniqueNums = uniq(pageNums);
    var lastPage = uniqueNums[uniqueNums.length-2];
    console.log(lastPage);

      // var tableRows = $('tr')

      // //Player, Team, Comp, Att, Yards, Tds, interceptions

      // //skip first row
      // tableRows.slice(1).each(function(i, element) {
      //     var cleanRow = [];

      //     var tds = $(element).children('td');

      //     tds.each(function(tdIndex, td) {
      //       var val = $(this).text().trim();

      //       //if there's a comma in the value then replace it with no comma (otherwise the csv will put 5,200 into two cells instead of one cell)
      //       if (val.indexOf(',') > -1) val = val.replace(',','');
            
      //       cleanRow.push(val);
      //     });

      //     fs.appendFile('agg-passing-yards-per-year.csv', cleanRow + "," + year + "\n", 'utf8', function (err) {
      //       if (err) {
      //         console.log('Some error occured - file either not saved or corrupted file saved.');
      //       } else{
      //         console.log('It\'s saved!');
      //       }
      //     });
      // });
});

