//function test(arr){

//}
function count(arr){
    arr.sort();
    console.log(arr);
    var str = "";
    var num = arr[0];
    var x = 0;
    var stringArry = [];
    for(let i=0;i<arr.length;i++){
           if(arr[i]!=arr[i+1]){
                stringArry[x] = (arr[i].toString()).repeat(num);
                num =1;
                x++
           }
           else

            num++;
    }
    console.log(stringArry);
    console.log(stringArry[1].length>stringArry[2].length)
    for(let n = 0,m=1;m<stringArry.length;m++){
          console.log(stringArry, m)
        if(stringArry[n].length==stringArry[m].length){
            continue;
        }
        else if (stringArry[n].length>stringArry[m].length){
            stringArry.splice(m,1);
            m--;
        }
        else{
            stringArry.splice(n,1);
            m--;
        }
         
    }
    console.log(stringArry)
}
count([1, 4 ,4, 4, 5 ,3]);