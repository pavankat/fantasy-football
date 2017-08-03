year=2017
week=1

while (( week <= 17 ));
do
    node new-schedule-scrape.js $year $week
    echo $year

    sleep 5

    week=$((week+1))
done

