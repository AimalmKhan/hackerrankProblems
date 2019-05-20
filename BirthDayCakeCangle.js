// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
   function SortingAlg(array){
         for(let i=1;i<array.length;i++){
        var temp = 0;
        if(array[0]<array[i]){
            temp = array[i];
            array[i]=array[0];
            array[0]=temp; 
        }
     }
     return array;
}   
    var sortedArray = SortingAlg(ar);
    var max = sortedArray[0];
    var numofLcandles = 0;
    for(let n=0;n<sortedArray.length;n++){
        if(sortedArray[n]==max)
            numofLcandles++;
    } 
    console.log(numofLcandles);
}
var aaa = [3 ,2 ,1 ,3];
birthdayCakeCandles(aaa);

