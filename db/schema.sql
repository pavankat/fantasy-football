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

-- CREATE TABLE mockdraftable_player_links(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     link VARCHAR(255),
--     position VARCHAR(255),
--     college VARCHAR(255),
--     year INTEGER
-- );