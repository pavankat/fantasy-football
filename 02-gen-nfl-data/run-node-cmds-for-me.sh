i=0
while (( i <= 435 ));
do 
    #node nfl-play-stat-urls-with-pages.js $i
    echo $i

    sleep 10

    i=$((i+1))
done