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


-- rankings for packers weeks 1-4 (do 1-4 because no bye weeks to content with)
	(SELECT st.away_rb_ranking, st.away
			FROM sched_plus_rankings_transforms st
			WHERE st.week <= 4
			AND st.away = 'Packers'
			ORDER BY st.away_rb_ranking ASC)
	UNION
	(SELECT st.home_rb_ranking, st.home
			FROM sched_plus_rankings_transforms st
			WHERE st.week <= 4
			AND st.home = 'Packers'
			ORDER BY st.home_rb_ranking ASC);

-- weeks 1-4 rb rankings
	WITH rbs AS (
	(SELECT st.away_rb_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week <= 4
			ORDER BY st.away_rb_ranking ASC)
	UNION
	(SELECT st.home_rb_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week <= 4
			ORDER BY st.home_rb_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM rbs
	GROUP BY team
	ORDER BY ranking_sum;

-- rb rankings weeks 5-12
	WITH rbs AS (
	(SELECT st.away_rb_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week > 4 AND st.week < 13
			ORDER BY st.away_rb_ranking ASC)
	UNION
	(SELECT st.home_rb_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week > 4 AND st.week < 13
			ORDER BY st.home_rb_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM rbs
	GROUP BY team
	ORDER BY team;

-- rb rankings weeks 1 - 12 
	WITH rbs AS (
	(SELECT st.away_rb_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week < 13
			ORDER BY st.away_rb_ranking ASC)
	UNION
	(SELECT st.home_rb_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week < 13
			ORDER BY st.home_rb_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM rbs
	GROUP BY team
	ORDER BY team;

-- rb rankings weeks 13 - 17
	WITH rbs AS (
	(SELECT st.away_rb_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week > 12
			ORDER BY st.away_rb_ranking ASC)
	UNION
	(SELECT st.home_rb_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week > 12
			ORDER BY st.home_rb_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM rbs
	GROUP BY team
	ORDER BY team;

-- rb rankings weeks 1-17
	WITH rbs AS (
	(SELECT st.away_rb_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			ORDER BY st.away_rb_ranking ASC)
	UNION
	(SELECT st.home_rb_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			ORDER BY st.home_rb_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM rbs
	GROUP BY team
	ORDER BY team;

-- best wrs weeks 1-17
	WITH wrs AS (
	(SELECT st.away_wr_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			ORDER BY st.away_wr_ranking ASC)
	UNION
	(SELECT st.home_wr_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			ORDER BY st.home_wr_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM wrs
	GROUP BY team
	ORDER BY team;

-- best wrs weeks 1-4
	WITH wrs AS (
	(SELECT st.away_wr_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week <= 4
			ORDER BY st.away_wr_ranking ASC)
	UNION
	(SELECT st.home_wr_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week <= 4
			ORDER BY st.home_wr_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM wrs
	GROUP BY team
	ORDER BY team;

-- defenses 1-17
	WITH defs AS (
	(SELECT st.away_defence_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			ORDER BY st.away_defence_ranking ASC)
	UNION
	(SELECT st.home_defence_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			ORDER BY st.home_defence_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM defs
	GROUP BY team
	ORDER BY team;

-- defense rankings for weeks 13-17
	WITH defs AS (
	(SELECT st.away_defence_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week > 12
			ORDER BY st.away_defence_ranking ASC)
	UNION
	(SELECT st.home_defence_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week > 12
			ORDER BY st.home_defence_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM defs
	GROUP BY team
	ORDER BY team;

-- kicker rankings weeks 1-4
	WITH kickers AS (
	(SELECT st.away_kicker_ranking as ranking, st.away as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week < 5
			ORDER BY st.away_kicker_ranking ASC)
	UNION
	(SELECT st.home_kicker_ranking as ranking, st.home as team
			FROM sched_plus_rankings_transforms st
			WHERE st.week < 5
			ORDER BY st.home_kicker_ranking ASC))
	SELECT SUM(ranking) as ranking_sum, team
	FROM kickers
	GROUP BY team
	ORDER BY team;

-- get the draft (in the future I can filter this by date - unless I do more than one in a day - I should change it to a timestamp if that happens in the future)
	SELECT d.round, d.place_in_round, d.player, 
	d.position, te.acronym, te.team 
	FROM drafts d
	LEFT JOIN teams te
	ON lower(d.team) = lower(te.acronym);


-- gets the draft position, player name, draft round and ranking of the rb for weeks 1-4 and puts an artificial column going from 1 to the last one

-- creating a virtual column of rankings going from 1 (best) to 31 (worst) - not sure why it doesn't go to 32?
	-- by using rank instead of row number we don't double count a team 
		-- DeMarco Murray and Derrick Henry	are both RBs on the Titans and they'll both be ranked 1 since they have the lowest rank during weeks 1-4
	-- I used dense rank instead of rank because rank won't double count, but it'll go 1,1,3,4,4,6 
	-- dense rank will do this 1,1,2,3,3,4
	WITH rbs AS (
		(SELECT st.away_rb_ranking as ranking, st.away as team, st.week
				FROM sched_plus_rankings_transforms st
				ORDER BY st.away_rb_ranking ASC)
		UNION
		(SELECT st.home_rb_ranking as ranking, st.home as team, st.week
				FROM sched_plus_rankings_transforms st
				ORDER BY st.home_rb_ranking ASC)
	), 
	ranking_sums_over_weeks AS 
	(
		SELECT SUM(ranking) as ranking_sum, team
		FROM rbs
		WHERE rbs.week <= 4
		GROUP BY team
		ORDER BY ranking_sum
	)
	SELECT d.player, 
	d.position, te.acronym, te.team, 
	ranking_sums_over_weeks.ranking_sum AS ranking_sum, d.round, d.place_in_round,
	DENSE_RANK() OVER (ORDER BY ranking_sums_over_weeks.ranking_sum ASC)
	FROM drafts d

	LEFT JOIN teams te
	ON LOWER(d.team) = LOWER(te.acronym)

	LEFT JOIN ranking_sums_over_weeks
	ON ranking_sums_over_weeks.team = te.team AND
	
	d.position = 'RB'
	WHERE d.position = 'RB'
	ORDER BY d.round, dense_rank;

-- for wrs + dense rank

	WITH wrs AS (
		(SELECT st.away_wr_ranking as ranking, st.away as team, st.week
				FROM sched_plus_rankings_transforms st
				WHERE st.week <= 4
				ORDER BY st.away_wr_ranking ASC)
		UNION
		(SELECT st.home_wr_ranking as ranking, st.home as team, st.week
				FROM sched_plus_rankings_transforms st
				WHERE st.week <= 4
				ORDER BY st.home_wr_ranking ASC)
	), 
	ranking_sums_over_weeks AS 
	(
		SELECT SUM(ranking) as ranking_sum, team
		FROM wrs
		WHERE wrs.week <= 4
		GROUP BY team
		ORDER BY ranking_sum
	)
	SELECT d.player, 
	d.position, te.acronym, te.team, 
	ranking_sums_over_weeks.ranking_sum AS ranking_sum, d.round, d.place_in_round,
	DENSE_RANK() OVER (ORDER BY ranking_sums_over_weeks.ranking_sum ASC)
	FROM drafts d

	LEFT JOIN teams te
	ON LOWER(d.team) = LOWER(te.acronym)

	LEFT JOIN ranking_sums_over_weeks
	ON ranking_sums_over_weeks.team = te.team AND
	
	d.position = 'WR'
	WHERE d.position = 'WR'
	ORDER BY d.round, dense_rank;
