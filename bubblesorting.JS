// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    function bubbleSorting(array){
         
         for(let i=1;i<array.length;i++){
            var temp = 0;
            if(array[0]<array[i]){
                temp = array[i];
                array[i]=array[0];
                array[0]=temp; 
            }
         }
         return (array[0]);
    }
   if(k<bubbleSorting(height)){
        var noDose = bubbleSorting(height)-k
            console.log(noDose);
   } 
    console.log(k);

}
hurdleRace(7,[2 ,5, 4 ,5 ,2]);