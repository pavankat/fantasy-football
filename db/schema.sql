DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS off_rankings;
DROP TABLE IF EXISTS def_rankings;
DROP TABLE IF EXISTS off_line_rankings;
DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS old_schedules;
DROP TABLE IF EXISTS drafts;

DROP VIEW sched_plus_rankings_transforms;
DROP VIEW sched_plus_rankings;

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

-- use this table to analyze where players are going in a draft and where the value picks are
CREATE TABLE drafts(
    id SERIAL PRIMARY KEY,
    round INTEGER,
    place_in_round INTEGER,
    player VARCHAR(255),
    team VARCHAR(255),
    position VARCHAR(255),
    mock BOOLEAN DEFAULT FALSE,
    website VARCHAR(255),
    typ VARCHAR(255),
    dat DATE
);

--create virtual table to transform on this with another query
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

        CREATE OR REPLACE VIEW sched_plus_rankings AS
        
        WITH sched_def_rankings AS (select s.week, s.away, away_teams.acronym as away_acr, s.home, home_teams.acronym as home_acr,
        away_defs.ranking as away_def_ranking, home_defs.ranking as home_def_ranking, s.year
        from schedules s
        left join teams away_teams
        on s.away = away_teams.team
        right join def_rankings away_defs
        on away_defs.acronym = away_teams.acronym
        left join teams home_teams
        on s.home = home_teams.team
        right join def_rankings home_defs
        on home_defs.acronym = home_teams.acronym
        WHERE s.year = '2018' AND away_defs.year = '2018' AND home_defs.year = '2018'
        order by s.week, home_acr asc),

         sched_def_oline_rankings AS(
        select sdr.*, 
        home_ors.ranking as home_off_line_ranking, 
        away_ors.ranking  as away_off_line_ranking
        from sched_def_rankings sdr
        left join off_line_rankings home_ors
        on home_ors.acronym = sdr.home_acr
        left join off_line_rankings away_ors
        on away_ors.acronym = sdr.away_acr
        WHERE home_ors.year = '2018' AND away_ors.year = '2018'), 

         sched_def_oline_off_rankings AS(
        select sdrolr.*, 
        home_ors.ranking as home_off_ranking, 
        away_ors.ranking  as away_off_ranking
        from sched_def_oline_rankings sdrolr
        left join off_rankings home_ors
        on home_ors.acronym = sdrolr.home_acr
        left join off_rankings away_ors
        on away_ors.acronym = sdrolr.away_acr
        WHERE home_ors.year = '2018' AND away_ors.year = '2018')

        select * from sched_def_oline_off_rankings;

--create virtual table to allow summing on this with another query
-- THE LOWER THE BETTER
-- select from view to reduce joins 
-- I then ordered by week and away_wr_ranking
    -- Then I took into account opp defense. Weaker defense means better opportunities.
    CREATE OR REPLACE VIEW sched_plus_rankings_transforms AS
    select 
    -- wr
        --60%
            -- 50% bad defense, 25% good offensive line, 25% good offense
        --40% opponent has bad defense
    (0.60*(+0.5*(32-ev.away_def_ranking+1)+0.25*(ev.away_off_line_ranking)+0.25*(ev.away_off_ranking))+
    0.40*((32-ev.home_def_ranking+1))) as away_wr_ranking, 
    
    (0.60*(+0.5*(32-ev.home_def_ranking+1)+0.25*(ev.home_off_line_ranking)+0.25*(ev.home_off_ranking))+
    0.40*((32-ev.away_def_ranking+1))) as home_wr_ranking, 
    -- rb
        --45%
            -- 75% good offensive line, 25% good defense
        --20% good offense
        --35% opponent has bad defense
    (0.45*(0.75*(ev.away_off_line_ranking)+0.25*(ev.away_def_ranking))+
    0.20*(ev.away_off_ranking)+ 
    0.35*(32-ev.home_def_ranking+1)) as away_rb_ranking, 
    
    (0.45*(0.75*(ev.home_off_line_ranking)+0.25*(ev.home_def_ranking))+
    0.20*(ev.home_off_ranking)+ 
    0.35*(32-ev.away_def_ranking+1)) as home_rb_ranking,
    -- kicker
        --40% bad offensive line,
        --20% good offense
        --20% good defense,
        --20% opponent good defense
    (0.4*(32-ev.away_off_line_ranking+1)+
    0.2*(ev.away_off_ranking)+
    0.2*(ev.away_def_ranking)+
    0.2*(ev.home_def_ranking)) as away_kicker_ranking,

    (0.4*(32-ev.home_off_line_ranking+1)+
    0.2*(ev.home_off_ranking)+
    0.2*(ev.home_def_ranking)+
    0.2*(ev.away_def_ranking)) as home_kicker_ranking,
    --defense 
        -- 40% bad opponent offense
        -- 20% good defense
        -- 40% bad opponent offensive line
    (0.4*(32-ev.home_off_ranking+1)+
    0.2*(away_def_ranking)+
    0.4*(32-ev.home_off_line_ranking+1)) as away_defence_ranking,
    
    (0.4*(32-ev.away_off_ranking+1)+
    0.2*(home_def_ranking)+
    0.4*(32-ev.away_off_line_ranking+1)) as home_defence_ranking,

    ev.*
    from sched_plus_rankings ev
    order by week asc;


-- CREATE TABLE mockdraftable_player_links(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     link VARCHAR(255),
--     position VARCHAR(255),
--     college VARCHAR(255),
--     year INTEGER
-- );