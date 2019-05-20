// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    // x1 = x1/1000
    // v1 = v1/1000
    // x2 = x2/1000
    // v2 = v2/1000

    for(;x1<=10000  || x2 <=10000 ; x1+=v1 , x2+=v2 ){
            if(x1==x2){
                return('Yes')
                break;
            }
    }
        return('No') 
}
console.log(kangaroo(0.1571, 0.4240, 0.9023, 0.4234));