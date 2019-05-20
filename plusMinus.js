 function plusMinus(arr) {
function sign(num){
    if(num==0)
        return 0;
    else if(num%2==0)
        return (num+1)%2
    return num%2
}
 var arrLength = arr.length; 
var pst =0, neg=0 ,zero=0 ;
 
for(let i = 0; i < arr.length ; i++){
    if(sign(arr[i])==1)
        pst++;
    else if (sign(arr[i])==-1) {
        neg++;
    }
    else
        zero++;
}
    var ratioPstv = pst/arrLength;
    var ratioNeg = neg/arrLength;
    var ratioZero = zero/arrLength;
        console.log(ratioPstv.toFixed(6),'\n',ratioNeg.toFixed(6),'\n',ratioZero.toFixed(6));
    }

var arr =  [-4, 3, -9, 0, 4, 1] ;
plusMinus(arr);