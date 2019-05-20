function timeConversion(s) {
    /*var pmTime = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "12"];

    if (s.slice(-2) == "AM" && s.slice(0, 2) != '12') {
        return(s.slice(0, -2));
    }
    else {
        var array = [];
        var str = s.slice(0, -2);
        function colonrmov(string) {
            var outputString = "";
            for (let n = 0; n < string.length; n++) {
                if (string[n] != ':') {
                    outputString += string[n];
                }
            }
            return outputString;
        }
        var newstr = colonrmov(str);

        if (s.slice(-2) == "AM" && s.slice(0, 2) == '12') {
            for (let x = 0, i = 0, j = 1; j < newstr.length; x++ , i += 2, j += 2) {
                array[x] = newstr[i] + newstr[j];
            }
            array[0] = "00";

            return(array.join(':'));
        }
        else {
            for (let x = 0, i = 0, j = 1; j < newstr.length; x++ , i += 2, j += 2) {
                array[x] = newstr[i] + newstr[j];
            }
            array[0] = pmTime[Number(array[0]) - 1];
            return(array.join(':'));
        }
    }  */
    if (s.slice(0, 2) == "12" && s.slice(-2) == "AM") {
        s = s.replace("12", "00");
        return(s.slice(0, -2))
    }
    else if (s.slice(-2) == "PM" && s.slice(0, 2) != "12") {
        s = s.replace(s.slice(0, 2), (Number(s.slice(0, 2)) + 12).toString())
        return (s.slice(0, -2))
    }
    else {
        return(s.slice(0, -2))
    }
 }