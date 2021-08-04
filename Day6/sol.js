function getMaxLessThanK(n,k){
    var mx = 0;
    for(var i = 1; i <= n ; i++){
        for(var j = i + 1 ; j <= n ; j++){

            if((i & j) < k && (i & j) > mx ){
                mx = i & j;
            }
        }
    }
    return mx;
}



// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(dateString);
    dayName = arr[date.getDay()];
    return dayName;
}
