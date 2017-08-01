i=0
while (( i <= 1553 ));
do 
    node scrape-nfl-data.js $i
    #echo $i

    sleep 10

    i=$((i+1))
done