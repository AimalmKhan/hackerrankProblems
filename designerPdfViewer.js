// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    var alpbts = "abcdefghijklmnopqrstuvwxyz";
    var ary = [];
    function retnlrgst(arr){
        for(let x = 0,y=1;y<arr.length;x++,y++){
            let temp = 0;
            if(arr[x]>arr[y]){
                temp = arr[x];
                arr[x] = arr[y];
                arr[y] = temp;
            }
        }
        return (arr[arr.length-1])
    }
    for(let i = 0;i<word.length;i++){
         let indx = alpbts.indexOf(word[i]);
         ary[i] = h[indx];
    }
    var height = retnlrgst(ary);
    return height*(word.length); 

}
var j = [1 ,3, 1 ,3 ,1, 4, 1, 3, 2, 5, 5 ,5, 5, 5 ,5, 5, 5, 5, 5, 5 ,5, 5 ,5, 5, 5 ,7]
var w = "zaba";
console.log(designerPdfViewer(j,w));