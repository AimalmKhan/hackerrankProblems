function compareTriplets(a, b) {
    var alicePoints = 0, bobPoints = 0 ;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i])
            alicePoints++;
        else if (a[i] < b[i])
            bobPoints++;
        

    }
    var result = [alicePoints, bobPoints]
    console.log(result);
    return result;

}
var aa = [17, 28, 30]
var bb = [99 ,16, 8]

compareTriplets(aa,bb);
