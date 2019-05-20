// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    function SelectionSorting(array) {
        var temp = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                var temp = 0;
                if (array[i] > array[j]) {
                     
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                     
                }
            }
        }
        return array;
    }
    var srtedArray = SelectionSorting(arr);

    var max = 0, mini = 0;

    for (let n = 0; n < srtedArray.length; n++) {
        if (n != srtedArray.length - 1) {
            mini += srtedArray[n];
             
        }
        if (n != 0) {
            max += srtedArray[n];

        }
    }
    console.log(mini, max) 

}
