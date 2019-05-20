function gradingStudents(grades) {
   // Function Of RoundOff
   function round(num){
        if((num+1)%5==0){
            return num+1
        }
        else if((num+2)%5==0){
            return num+2
        }
        else 
            return num
   }
   //---------------------------------//
   var Mgrades = [];
   for(let i=0;i<grades.length;i++){
        if(grades[i]<38){
            Mgrades[i] = grades[i]
        }
        else{
            Mgrades[i] = round(grades[i])
        }

   }
   return(Mgrades);
}
    gradingStudents([73,
67,
38,
33]);
