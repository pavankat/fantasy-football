var Nightmare = require('nightmare');
var cheerio = require('cheerio')
var fs = require('fs'); //internal
var limit = require("simple-rate-limiter");

var movies = ["coffee", "monkeys", "tea"]

var scrape = limit(function(url, callback) {
  console.log('hi: ' + url)
}).to(1).per(1000*3); //1 requests per every 3 seconds

movies.forEach(function(movie) {
  scrape(movie, function(error, response, body) {
    
  });
})

function uniq(a) {
   return Array.from(new Set(a));
}

function scrape(url){
  var scrape = new Nightmare({
          show: false
      })
      .goto(url)
      .wait(2000)
      .evaluate(function() {
          return document.body.innerHTML;
      }).then(function(html) {
        var $ = cheerio.load(html);
        var lastPage;

        try {
           //print out page numbers for now
           console.log('---------line 17---------');
           var span = $('span.linkNavigation');
           console.log('---------line 19---------');
           var linksInSpan = span.children('a');
           console.log('---------line 21---------');
           var pageNums = [];

           linksInSpan.each(function(i, element) {
             pageNums.push($(element).text());
           });
           console.log('---------line 27---------');
           var uniqueNums = uniq(pageNums);
           lastPage = uniqueNums[uniqueNums.length-2];
           console.log('---------line 30---------');
           if (lastPage == undefined) lastPage = 1;
           console.log('---------SUCCESS---------');
           console.log(lastPage)
           console.log('---------SUCCESS---------');

           var str = `"${url}",${lastPage}`;
           fs.appendFile('nfl-player-stat-urls.csv', str + "\n", 'utf8', function (err) {
             if (err) {
               console.log('Some error occured - file either not saved or corrupted file saved.');
             } else{
               console.log('It\'s saved!');
             }
           });
        }
        catch (e) {
           console.log('---------ERROR---------');
           console.log(e);
           console.log(url);
           console.log('---------ERROR---------');
           lastPage = 0; //making it 0 to see how many are like this

           var str = `"${url}",${lastPage}`;
           fs.appendFile('nfl-player-stat-urls.csv', str + "\n", 'utf8', function (err) {
             if (err) {
               console.log('Some error occured - file either not saved or corrupted file saved.');
             } else{
               console.log('It\'s saved!');
             }
           });
        }
      });
}
var url;
var startYear = 2016;
var endYear = 1999;
var page = 1;
var seasonTypes = ['REG', 'POST', 'PRE'];
var categ = ['PASSING', 'RUSHING', 'RECEIVING', 'KICKING', 'FIELD_GOALS', 'KICK_RETURNS', 'PUNTING', 'SACKS', 'TACKLES'];

for (var k=startYear; k>endYear; k--){
  for (var i=0; i<seasonTypes.length; i++){
    for (var j=0; j<categ.length; j++){
  
      url = `http://www.nfl.com/stats/categorystats?tabSeq=0&season=${k}&seasonType=${seasonTypes[i]}&d-447263-n=2&d-447263-o=2&statisticCategory=${categ[j]}&conference=null&d-447263-p=${page}`;

      scrape(url);
    }
  }
}


