select * 
from def_rankings
order by ranking asc;

select * 
from off_rankings
order by ranking asc;

select * 
from off_line_rankings
order by ranking asc;

select * 
from teams
order by acronym asc;

-- this gives 6 results because these teams have mutliple acronyms
select * 
from teams
where team in ('Jaguars', 'Rams', 'Chargers');

select * 
from schedules
order by week, away asc;

--get defensive rankings for teams with multiple acronyms
select * 
from def_rankings def
left join teams tea
on tea.acronym = def.acronym
where tea.acronym in ('JAX', 'JAC', 'SD', 'LAC', 'STL', 'LAR');

--show me the scheudule with the teams that are playing and the acronyms for those teams
select s.week, s.away, t.acronym as away_team_acr, s.home, tea.acronym as home_team_acr
from schedules s
left join teams t
on s.away = t.team
left join teams tea
on s.home = tea.team
order by s.week, s.away asc;

-- had to use a right join because there are teams with multiple acronyms
	-- uses three WITH clauses that build off of each other
		-- and then lastly select the last WITH clause
-- this grabs the schedules and gives 
-- the defensive rankings for the teams 
	-- AND the offensive line rankings
	-- AND the offense rankings
-- it assumes that there are only 32 rankings for each team
	-- this can change because I could load in rankings for another article
-- I threw in away and home for wr and rb rankings (but I didn't take into account opp defense and opp offense)
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
select ev.*, (0.25*(ev.away_off_line_ranking)+0.75*(32-ev.away_def_ranking+1)) as away_wr_ranking, 
(0.25*(ev.home_off_line_ranking)+0.75*(32-ev.home_def_ranking+1)) as home_wr_ranking,
(0.75*(ev.away_off_line_ranking)+0.25*(ev.away_def_ranking)) as away_rb_ranking, 
(0.75*(ev.home_off_line_ranking)+0.25*(ev.home_def_ranking)) as home_rb_ranking,
from sched_def_oline_off_rankings ev;