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
                    fs.appendFile('ol.csv', Object.values(players[key]).join(", ") + "\n", 'utf8', function (err) {
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


//done in csv form definitely works - in database it was wrong
    //qb - qbs.csv
    //goes up to 17 
    //loopScrape(1, 17, 'https:/www.mockdraftable.com/search?position=QB&beginYear=1999&endYear=2017&sort=DESC&page=');

    //hb, fb, wr, te - skill-players.csv
    //goes up to 86
    //loopScrape(81, 86, 'https://www.mockdraftable.com/search?position=BALL&beginYear=1999&endYear=2017&sort=DESC&page=');

    //DB (cbs, safeties) - dbs.csv
    //goes up to 51
    //loopScrape(41, 51, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');

    //line backers (olbs, ilbs) - line_backers.csv
    //goes up to 33
    // loopScrape(31, 33, 'https://www.mockdraftable.com/search?position=LB&beginYear=1999&endYear=2017&sort=DESC&page=');

    //weirdly enough have 1 defensive lineman in there - there's only one listed as dl on the entire mockdraftable site

    //edge defenders (de) - defensive_ends.csv
    //goes up to 25
    // loopScrape(21, 25, 'https://www.mockdraftable.com/search?position=EDGE&beginYear=1999&endYear=2017&sort=DESC&page=');

    //defensive tackles (dt) - dts.csv
    //goes up to 23
    //loopScrape(21, 23, 'https://www.mockdraftable.com/search?position=IDL&beginYear=1999&endYear=2017&sort=DESC&page=');

// ol (ot, og, oc) - ???.csv
// goes up to 49
loopScrape(46, 49, 'https://www.mockdraftable.com/search?position=OL&beginYear=1999&endYear=2017&sort=DESC&page=');


