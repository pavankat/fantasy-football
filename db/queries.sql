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

-- exploring the schedule and rankings
	select *
	from sched_plus_rankings;

-- exploring the transforms on the schedule and rankings
	-- select from view to reduce joins 
		select *
		from sched_plus_rankings_transforms
		order by week asc;

-- exploring each individual week and metric
	-- 11 something or below is a good score
		--- week1 wr
		  -- away: steelers, falcons, panthers 
		  -- home: bills, bears
		--- week1 rb
		  -- away: chiefs, eagles, jaguars, raiders, 
		  -- home: packers, cowboys, patriots, titans
		--- week2 wr
		  -- away: packers, bears, 
		  -- home: falcons, raiders, bucs
		--- week2 rb
		  -- away: eagles, cowboys, titans 
		  -- home: steelers

		select week, 
		away, away_wr_ranking, 
		home, home_wr_ranking, 
		week, 
		away, away_rb_ranking, 
		home, home_rb_ranking

		from sched_plus_rankings_transforms
		where week=1
		order by away_rb_ranking asc;




