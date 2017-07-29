var Nightmare = require('nightmare');
var cheerio = require('cheerio')
var fs = require('fs'); //internal

var data = [
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2016&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2016,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2016&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2016,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2016&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2016,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2015,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2014,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2013,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2012,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2011,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2010,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2009,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2008,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2007,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2006,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2005,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2004,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2003,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2002,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2001,
    "seasonType": "PRE",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "REG",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "POST",
    "category": "TACKLES"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "PASSING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "RUSHING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "RECEIVING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "KICKING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "FIELD_GOALS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "KICK_RETURNS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "PUNTING"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "SACKS"
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2000,
    "seasonType": "PRE",
    "category": "TACKLES"
  }
];

var arg = process.argv[2];
console.log(arg);

scrape(data[parseInt(arg)]);

function uniq(a) {
   return Array.from(new Set(a));
}

function scrape(urlOb){
  console.log(urlOb);
  var scrape = new Nightmare({
          show: false
      })
      .goto(urlOb.url)
      .evaluate(function() {
          return document.body.innerHTML;
      }).end().then(function(html) {
        if (html == undefined) return console.log('html not there!');

        var $ = cheerio.load(html);
        var lastPage;

        var span = $('span.linkNavigation');
        var linksInSpan = span.children('a');
        var pageNums = [];

        linksInSpan.each(function(i, element) {
         pageNums.push($(element).text());
        });

        var uniqueNums = uniq(pageNums);
        lastPage = uniqueNums[uniqueNums.length-2];

        if (lastPage == undefined) lastPage = 1;

        var str = `"${urlOb.url}",${urlOb.year},${urlOb.seasonType},${urlOb.category},${lastPage}`;

        fs.appendFile('nfl-player-stat-urls-with-pages.csv', str + "\n", 'utf8', function (err) {
          if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
          } else{
            console.log('It\'s saved!');
          }
        });
      });
}