
// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    bill.splice(k,1);
    console.log(bill)
    var halfBill = 0;
    for(let i =0 ; i<bill.length;i++){
        halfBill += bill[i];
    }
    console.log(halfBill)
    if(halfBill/2==b){
       return "Bon Appetit"
    }
    else{
        return b-(halfBill/2)
    }
}
console.log(bonAppetit([3, 10 ,2 ,9],1,12))