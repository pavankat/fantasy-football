--HEADER means skip first row

\copy teams(acronym, loc_team, loc, team) FROM '../csvs/teams_locations_acronyms.csv' DELIMITER ',' CSV HEADER;

\copy off_rankings(acronym, ranking, source, year) FROM '../csvs/2017-offense-rankings.csv' DELIMITER E'\t' CSV HEADER;

\copy def_rankings(acronym, ranking, source, year) FROM '../csvs/2017-defense-rankings.csv' DELIMITER E'\t' CSV HEADER;

\copy off_line_rankings(acronym, ranking, source, year) FROM '../csvs/2017-offensive-line-rankings.csv' DELIMITER E'\t' CSV HEADER;

\copy schedules(week, time_of_day, away, home, year) FROM '../csvs/schedule-scrape/2017-cleaned-schedule.csv' DELIMITER ',' CSV HEADER;

\copy old_schedules(away, away_score, home_score, home, year, week) FROM '../csvs/schedule-scrape/old-cleaned-schedule.csv' DELIMITER ',' CSV HEADER;

\copy drafts(round, place_in_round, player, team, position, mock, website, typ, dat) FROM '../csvs/draft-aug-6-2017.csv' DELIMITER ',' CSV HEADER;

\copy schedules(week, time_of_day, away, home, year) FROM '../csvs/schedule-scrape/2018-cleaned-schedule.csv' DELIMITER ',' CSV HEADER;

\copy off_line_rankings(acronym, ranking, source, year) FROM '../csvs/2018-offensive-line-rankings.csv' DELIMITER E'\t' CSV HEADER;

\copy def_rankings(acronym, ranking, source, year) FROM '../csvs/2018-defense-rankings.csv' DELIMITER E'\t' CSV HEADER;

\copy off_rankings(acronym, ranking, source, year) FROM '../csvs/2018-offense-rankings.csv' DELIMITER E'\t' CSV HEADER;