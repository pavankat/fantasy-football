//this file generates nfl-player-stat-urls.csv
  //the csv is used by nfl-player-stat-urls-with-pages.js

var fs = require('fs'); //internal

var url;
var startYear = 2015;
var endYear = 1999;
var page = 1;
var seasonTypes = ['REG', 'POST', 'PRE'];
var categ = ['PASSING', 'RUSHING', 'RECEIVING', 'KICKING', 'FIELD_GOALS', 'KICK_RETURNS', 'PUNTING', 'SACKS', 'TACKLES'];

for (var k=startYear; k>endYear; k--){
  for (var i=0; i<seasonTypes.length; i++){
    for (var j=0; j<categ.length; j++){
  
      url = `http://www.nfl.com/stats/categorystats?tabSeq=0&season=${k}&seasonType=${seasonTypes[i]}&d-447263-n=2&d-447263-o=2&statisticCategory=${categ[j]}&conference=null&d-447263-p=${page}`;

      var row = `"${url}",${k},${seasonTypes[i]},${categ[j]}`;

      fs.appendFile('nfl-player-stat-urls.csv',  row + "\n", 'utf8', function (err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
        } else{
          console.log('It\'s saved!');
        }
      });
    }
  }
}


