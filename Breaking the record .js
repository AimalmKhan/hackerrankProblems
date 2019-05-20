// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var max =scores[0] , min =scores[0], numMax=0 , numMin=0 ;
    for(let i=1;i<scores.length;i++){
        if(scores[i]<min){
            numMin++;
            min = scores[i]
        }
        else if(scores[i]>max){
            numMax++;
            max = scores[i]
        }

    }
        console.log(numMax);
        console.log(numMin);
}
breakingRecords([3 ,4 ,21 ,36 ,10 ,28 ,35, 5, 24 ,42])