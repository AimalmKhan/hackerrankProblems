// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    var  numOfDivisible =0;

    for(let i=0,j=1+i;i<n-1;i++,j++){
        for(let j=1+i;j<n;j++){
            var sum = 0;
        sum = ar[i]+ar[j];
        
        if(sum%k==0){
            console.log(ar[i],ar[j],sum)
            numOfDivisible++;
        }
        }
       
    }
    console.log(numOfDivisible);
}   
divisibleSumPairs(6,3,[1 ,3, 2, 6 ,1, 2])