// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
        var numOfApples = 0 , numOfOranges = 0;
        for(let i = 0; i < apples.length;i++){
            apples[i] = apples[i]+a;
            console.log(apples[i])
            if(apples[i]>=s&&apples[i]<=t){
                numOfApples++;
            }
        }
        for(let j=0;j<oranges.length;j++){
            oranges[j]=oranges[j]+b;
            console.log(oranges[j])
            if(oranges[j]>=s && oranges[j]<=t){
                numOfOranges++;
            }
        }
        console.log(numOfApples ,'\n',numOfOranges);
}
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);
// new commit