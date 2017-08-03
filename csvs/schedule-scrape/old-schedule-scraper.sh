year=2016
week=1

while (( year >= 1999 ));
week=1
do
	while (( week <= 17 ));
	do
	    node old-schedule-scrape.js $year $week
	    echo $year

	    sleep 5

	    week=$((week+1))
	done
	year=$((year-1))
done