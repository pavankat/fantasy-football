var cheerio = require("cheerio");
var Nightmare = require('nightmare');
var pg = require('pg');
var fs = require('fs'); //internal

// Connection string to connect to our database
var connectionString = "pg://localhost/fantasy_football";

var pg = require('pg');

var loopScrape = function(start, upTo, baseUrl) {
    for (var i = start; i <= upTo; i++) {
        var scrape = new Nightmare({
                show: false
            })
            .goto(baseUrl + i)
            .wait(1000)
            .evaluate(function() {
                return document.body.innerHTML;
            }).then(function(html) {
                // console.log('html length: ', html.length);

                var $ = cheerio.load(html);

                players = $(".list-group").find('a').map(function(j, element) {
                    var link = $(element).attr("href");
                    var name = $(element).find('h5').text();
                    var position = $(element).find('span').eq(0).text();
                    var collegeYear = $(element).find('span').eq(1).text().split(',');
                    var college = collegeYear[0];
                    var year = collegeYear[1];

                    var player = {
                        link : link,
                        name : name,
                        position : position,
                        college : college,
                        year : year
                    };
                    
                    // console.log('-----------------line 83------------------');
                    // console.log(player);
                    // console.log("page number: " + i, "player number: " + j)
                    // console.log('-------------------line 86----------------');

                    return player;
                }).get();

                return players;
            }).then(function(players){
                console.log('***********************************');
                console.log(players.length);
                console.log('***********************************');

                // console.log('***********************************');
                // console.log('***********************************');
                // console.log('THIS SHOULD NOT BE UNDEFINED', players);
                // console.log('***********************************');
                // console.log('***********************************');

                for (key in players) {
                    //convert object's values to array, join into a string separated by , and add a new line 
                    fs.appendFile('line_backers.csv', Object.values(players[key]).join(", ") + "\n", 'utf8', function (err) {
                      if (err) {
                        console.log('Some error occured - file either not saved or corrupted file saved.');
                      } else{
                        console.log('It\'s saved!');
                      }
                    });

                    //doesn't work 
                        // pg.connect(connectionString, function(err, client, done) {
                        //     client.query('INSERT INTO mockdraftable_player_links (link, name, position, college, year) VALUES ($1, $2, $3, $4, $5) RETURNING id', [players[key].link, players[key].name, players[key].position, players[key].college, players[key].year], function(err, result) {

                        //         if (err) console.log('error', err);

                        //         done();
                        //     });
                        // });
                }
            });
    }
}


//done in csv form definitely - in database it was wrong
    //qb goes up to 17
    //loopScrape(1, 17, 'https:/www.mockdraftable.com/search?position=QB&beginYear=1999&endYear=2017&sort=DESC&page=');

    //hb, fb, wr, te
    //goes up to 86
    //loopScrape(81, 86, 'https://www.mockdraftable.com/search?position=BALL&beginYear=1999&endYear=2017&sort=DESC&page=');

    //DB (cbs, safeties)
    //goes up to 51
    //loopScrape(41, 51, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');

    //line backers (olbs, ilbs)
    //goes up to 33
    // loopScrape(31, 33, 'https://www.mockdraftable.com/search?position=LB&beginYear=1999&endYear=2017&sort=DESC&page=');

// }).then(function(result){ 
//     // edge defenders (de)
//     return loopScrape(25, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');
// }).then(function(result){ 
//     // ol (ot, og, oc)
//     return loopScrape(49, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');
// });