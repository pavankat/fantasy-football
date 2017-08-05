DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS off_rankings;
DROP TABLE IF EXISTS def_rankings;
DROP TABLE IF EXISTS off_line_rankings;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS old_schedules;

CREATE TABLE teams(
    id SERIAL PRIMARY KEY,
    acronym VARCHAR(255),
    loc_team VARCHAR(255),
    loc VARCHAR(255),
    team VARCHAR(255)
);

CREATE TABLE off_rankings(
    id SERIAL PRIMARY KEY,
    acronym VARCHAR(255),
    ranking INTEGER,
    source VARCHAR(255),
    year VARCHAR(255)
);

CREATE TABLE def_rankings(
    id SERIAL PRIMARY KEY,
    acronym VARCHAR(255),
    ranking INTEGER,
    source VARCHAR(255),
    year VARCHAR(255)
);

CREATE TABLE off_line_rankings(
    id SERIAL PRIMARY KEY,
    acronym VARCHAR(255),
    ranking INTEGER,
    source VARCHAR(255),
    year VARCHAR(255)
);

CREATE TABLE schedules(
    id SERIAL PRIMARY KEY,
    week INTEGER,
    time_of_day VARCHAR(255),
    away VARCHAR(255),
    home VARCHAR(255),
    year VARCHAR(255)
);

CREATE TABLE old_schedules(
    id SERIAL PRIMARY KEY,
    away VARCHAR(255),
    away_score INTEGER,
    home_score INTEGER,
    home VARCHAR(255),
    year VARCHAR(255),
    week INTEGER
);

--create virtual table to reduce number of joins
    -- had to use a right join because there are teams with multiple acronyms
        -- uses three WITH clauses that build off of each other
            -- and then lastly select the last WITH clause
    -- this grabs the schedules and gives 
    -- the defensive rankings for the teams 
        -- AND the offensive line rankings
        -- AND the offense rankings
    -- it assumes that there are only 32 rankings for each team
        -- this can change because I could load in rankings for another article
    -- I threw in away and home for wr and rb rankings
CREATE VIEW sched_plus_rankings AS
WITH sched_def_rankings AS (select s.week, s.away, away_teams.acronym as away_acr, s.home, home_teams.acronym as home_acr,
away_defs.ranking as away_def_ranking, home_defs.ranking as home_def_ranking
from schedules s
left join teams away_teams
on s.away = away_teams.team
right join def_rankings away_defs
on away_defs.acronym = away_teams.acronym
left join teams home_teams
on s.home = home_teams.team
right join def_rankings home_defs
on home_defs.acronym = home_teams.acronym
order by s.week, home_acr asc), sched_def_oline_rankings AS(
select sdr.*, 
home_ors.ranking as home_off_line_ranking, 
away_ors.ranking  as away_off_line_ranking
from sched_def_rankings sdr
left join off_line_rankings home_ors
on home_ors.acronym = sdr.home_acr
left join off_line_rankings away_ors
on away_ors.acronym = sdr.away_acr), sched_def_oline_off_rankings AS(
select sdrolr.*, 
home_ors.ranking as home_off_ranking, 
away_ors.ranking  as away_off_ranking
from sched_def_oline_rankings sdrolr
left join off_rankings home_ors
on home_ors.acronym = sdrolr.home_acr
left join off_rankings away_ors
on away_ors.acronym = sdrolr.away_acr)
select * from sched_def_oline_off_rankings;

-- CREATE TABLE mockdraftable_player_links(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     link VARCHAR(255),
--     position VARCHAR(255),
--     college VARCHAR(255),
--     year INTEGER
-- );