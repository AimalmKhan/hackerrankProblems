// Complete the staircase function below.
function staircase(n) {
    var j = 1;
    for (let i = n - 1; i >= 0; i--) {
        console.log(' '.repeat(i) + '#'.repeat(j))
        j++;
    }

}