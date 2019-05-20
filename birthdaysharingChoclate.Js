// Complete the birthday function below.
function birthday(s, d, m) {
    var posibletes= 0;

    for(let i = 0; i<=s.length;i++){
        var sum = s[i] ,x=1;
        for(let j = i+1;j<m+i;j++){
            sum += s[j];
            console.log(x++ ,s[i],s[j],sum)
        }
        if(sum==d)
            posibletes++
    }
    console.log(posibletes);
}
birthday([2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3 ,4 ,1 ,3 ,5, 4, 5 ,3, 1, 1, 5 ,4 ,3, 5 ,3, 5, 3 ,4 ,4, 2 ,4 ,5, 2 ,3, 2 ,5, 3, 4, 2, 4, 3, 3 ,4, 3, 5 ,2, 5 ,1, 3 ,1 ,4 ,2 ,2, 4 ,3 ,3, 3 ,3 ,4, 1, 1, 4 ,3, 1 ,5 ,2, 5 ,1, 3 ,5, 4 ,3 ,3 ,1, 5, 3, 3 ,3 ,4, 5 ,2],26,8);