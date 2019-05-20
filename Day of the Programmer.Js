// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    //          JuleanCalander
    function Jclndr(yr){
        if(yr%4==0){
                return("12.09."+String(yr) )
        }
        else{
             return("13.09."+String(yr))
        }
}
    //     Greogrian-Calander
    function Gclndr(yrr){
        if(yrr%400==0 ){
        return("12.09."+String(yrr))
    }
    else if(yrr%4==0&& yrr%100 !=0){
            return("12.09."+String(yrr))
    }
    else{
         return("13.09."+String(yrr))
    }
    }
    // ===============================
    if(year==1918){
        return("26.09."+String(year))
    }
    else if(year<=1917){
        return Jclndr(year)
    }
    else {
        return Gclndr(year);
    }

}
console.log(dayOfProgrammer(2600))
