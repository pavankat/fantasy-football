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

-- THE LOWER THE BETTER
-- select from view to reduce joins 
-- I then ordered by week and away_wr_ranking
	-- Then I took into account opp defense. Weaker defense means better opportunities.
select 
ev.week,
-- wr
	--60%
		-- 50% bad defense, 25% good offensive line, 25% good offense
	--40% opponent has bad defense
ev.away,
(0.60*(+0.5*(32-ev.away_def_ranking+1)+0.25*(ev.away_off_line_ranking)+0.25*(ev.away_off_ranking))+
0.40*((32-ev.home_def_ranking+1))) as away_wr_ranking, 

ev.home,
(0.60*(+0.5*(32-ev.home_def_ranking+1)+0.25*(ev.home_off_line_ranking)+0.25*(ev.home_off_ranking))+
0.40*((32-ev.away_def_ranking+1))) as home_wr_ranking, 

ev.week,
-- rb
	--45%
		-- 75% good offensive line, 25% good defense
	--20% good offense
	--35% opponent has bad defense
ev.away,
(0.45*(0.75*(ev.away_off_line_ranking)+0.25*(ev.away_def_ranking))+
0.20*(ev.away_off_ranking)+	
0.35*(ev.home_def_ranking)) as away_rb_ranking, 

ev.home,
(0.45*(0.75*(ev.home_off_line_ranking)+0.25*(ev.home_def_ranking))+
0.20*(ev.home_off_ranking)+	
0.35*(ev.away_def_ranking)) as home_rb_ranking,

ev.week,
-- kicker
	--50% bad offensive line,
	--20% good offense
	--20% good defense,
	--20% opponent bad defense
ev.away,
(0.4*(32-ev.away_off_line_ranking+1)+
0.2*(ev.away_off_ranking)+
0.2*(ev.away_def_ranking)+
0.2*(ev.home_def_ranking)) as away_kicker_ranking,

ev.home,
(0.4*(32-ev.home_off_line_ranking+1)+
0.2*(ev.home_off_ranking)+
0.2*(ev.home_def_ranking)+
0.2*(ev.away_def_ranking)) as home_kicker_ranking,

ev.week,
--defense 
	-- 40% bad opponent offense
	-- 20% good defense
	-- 40% bad opponent offensive line
ev.away,
(0.4*(32-ev.home_off_ranking+1)+
0.2*(away_def_ranking)+
0.4*(32-ev.home_off_line_ranking+1)) as away_def_ranking,

ev.home,
(0.4*(32-ev.away_off_ranking+1)+
0.2*(home_def_ranking)+
0.4*(32-ev.away_off_line_ranking+1)) as home_def_ranking,

ev.*
from sched_plus_rankings ev
order by away_wr_ranking asc;










