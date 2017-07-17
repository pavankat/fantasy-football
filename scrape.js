var cheerio = require("cheerio");
var Nightmare = require('nightmare');
var Promise = require("bluebird");
var pg = require('pg');

// Connection string to connect to our database
var connectionString = "pg://localhost/fantasy_football";

var loopScrape = function(upTo, baseUrl) {
    return new Promise(function(resolve, reject) {
        for (var i = 1; i <= upTo; i++) {
            var facebook = new Nightmare({
                    show: false
                })
                .goto(baseUrl + i)
                .wait(1000)
                .evaluate(function() {
                    return document.body.innerHTML;
                }).then(function(html) {
                    var $ = cheerio.load(html);
                    $(".list-group").find('a').each(function(i, element) {
                        var link = $(element).attr("href");
                        //h5, span0, span1
                        console.log("link: " + link)
                        console.log("name: " + $(element).find('h5').text());
                        console.log("position: " + $(element).find('span').eq(0).text());
                        var collegeYear = $(element).find('span').eq(1).text().split(',');
                        console.log("college: " + collegeYear[0]);
                        console.log("year: " + collegeYear[1]);
                        console.log('-----------------------------------')

                        pg.connect(connectionString, function(err, client, done) {
                            client.query('INSERT INTO sauces (name, manufacturer_id) VALUES ($1, $2) RETURNING id', [req.body.name, req.body.manufacturer_id], function(err, result) {
                                client.query('INSERT INTO sauce_prices (sauce_id, price) VALUES ($1, $2)', [result.rows[0].id, req.body.price], function(errr, resultt) {
                                    console.log('error 2');
                                    console.log(errr);
                                    done();
                                    res.redirect('/sauces');
                                });
                            });
                        });

                    });
                });
        }
    })
}

//qb
loopScrape(17, 'https:/www.mockdraftable.com/search?position=QB&beginYear=1999&endYear=2017&sort=DESC&page=');

//hb, fb, wr, te
loopScrape(86, 'https://www.mockdraftable.com/search?position=BALL&beginYear=1999&endYear=2017&sort=DESC&page=');

// DB (cbs, safeties)
loopScrape(51, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');

// lbs (olb, ilb)
loopScrape(33, 'https://www.mockdraftable.com/search?position=LB&beginYear=1999&endYear=2017&sort=DESC&page=');

// edge defenders (de)
// 	https://www.mockdraftable.com/search?position=EDGE&beginYear=1999&endYear=2017&sort=DESC&page=25
loopScrape(25, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');

// ol (ot, og, oc)
// 	https://www.mockdraftable.com/search?position=OL&beginYear=1999&endYear=2017&sort=DESC&page=49
loopScrape(49, 'https://www.mockdraftable.com/search?position=DB&beginYear=1999&endYear=2017&sort=DESC&page=');