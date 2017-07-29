var fs = require('fs'); //internal

var urls = [
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2016&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2016,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2016&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2016,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2016&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2016,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2015&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2015,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2014&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2014,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2013&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2013,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2012&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2012,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2011&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2011,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2010&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2010,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2009&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2009,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2008&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2008,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2007&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2007,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 9
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 9
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2006&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2006,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2005&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2005,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2004&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2004,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2003&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2003,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 8
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2002&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2002,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 9
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 4
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2001&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2001,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "PASSING",
    "last_page": 3
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "RUSHING",
    "last_page": 7
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "RECEIVING",
    "last_page": 8
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "KICKING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "KICK_RETURNS",
    "last_page": 5
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "SACKS",
    "last_page": 10
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=REG&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "REG",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "RUSHING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "RECEIVING",
    "last_page": 2
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "SACKS",
    "last_page": 6
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "POST",
    "category": "TACKLES",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PASSING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "PASSING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RUSHING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "RUSHING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=RECEIVING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "RECEIVING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICKING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "KICKING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=FIELD_GOALS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "FIELD_GOALS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=KICK_RETURNS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "KICK_RETURNS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=PUNTING&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "PUNTING",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "SACKS",
    "last_page": 1
  },
  {
    "url": "http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=PRE&d-447263-n=2&d-447263-o=2&statisticCategory=TACKLES&conference=null&d-447263-p=1",
    "year": 2000,
    "season_type": "PRE",
    "category": "TACKLES",
    "last_page": 1
  }
];

//loop over each url object in urls
for (var i=0; i<urls.length; i++){
  var urlOb = urls[i];

  //looks like: http://www.nfl.com/stats/categorystats?tabSeq=0&season=2000&seasonType=POST&d-447263-n=2&d-447263-o=2&statisticCategory=SACKS&conference=null&d-447263-p=1
  var url = urlOb.url;

  //get rid of last char and create new string with the result
  var baseUrl = url.slice(0, url.length-1);

  var lastPage = parseInt(urlOb.last_page);

  //make a url for each page until 1 <= last_page
  for (var j=1; j<=lastPage; j++){
    var newUrl = baseUrl + j;
    var csvRow = `"${newUrl}",${urlOb.year},${urlOb.season_type},${urlOb.category},${lastPage}`;

    fs.appendFile('final-nfl-player-stat-urls.csv', csvRow + "\n", 'utf8', function (err) {
      if (err) console.log('Some error occured.');
      else console.log('It\'s saved!');
    });
  }
}