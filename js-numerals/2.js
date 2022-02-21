function humanize(num) {
    var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    var numString = num.toString(); // convert to string

    let beginning = +numString.slice(0,2); // for number with length (5,8,11,14)
    // console.log(beginning);

    if (num < 0) throw new Error("Negative numbers are not supported.");
    if (num === 0) return "zero";

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + " " + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return ones[numString[0]] + " hundred";
        else
            return (
                ones[numString[0]] +
                " hundred and " +
                humanize(+(numString[1] + numString[2]))
            );
    }


    if (numString.length === 4) {
        let end = +numString.slice(1);

        if (end === 0){ return ones[numString[0]] + " Thousand";}

        else if (end < 100){  return ones[numString[0]] + " Thousand and " + humanize(end);}

    else{ 
        return ones[numString[0]] + " Thousand " + humanize(end);}
    }


                        // with 5 numbers check it less the 19 or more than 
    if (numString.length === 5) {
        let end = +numString.slice(1);
        
        
        if (end === 0) {
            return tens[numString[0]] + " thousand";
        }
        if (end < 100) {
            return ones[numString[0]] + " thousand and " + humanize(end);
    } else {
        if(beginning < 20){
            console.log(beginning)
            // return ones[numString[0]] + humanize(end);
            return ones[beginning] + humanize(end);
        }
        return tens[numString[0]]  + humanize(end);
        }
    }

    if (numString.length === 6) {
        let end = +numString.slice(1);
        
        if (end === 0) {
            return ones[numString[0]] + "  hundred thousand";
        }
        if (end < 100) {
            return ones[numString[0]] + "hundred thousand and " + humanize(end);
    } else {
            // return tens[numString[0]] +  " thousand and " + humanize(end);
            return ones[numString[0]] + ' Hundred ' + humanize(end);
        }
    }

    if (numString.length === 7) {
        let end = +numString.slice(1);
        
        if (end === 0) {
            return ones[numString[0]] + " Million ";
        }
        if (end < 100) {
            return ones[numString[0]] + " Million " + humanize(end);
    } else {
            // return tens[numString[0]] +  " thousand and " + humanize(end);
            return ones[numString[0]]+ " Million " + humanize(end);
        }
    }
                // check it more than 19 or less 
    if (numString.length === 8) {
        let end = +numString.slice(1);
        
        if (end === 0) {
            return tens[numString[0]] + " Million ";
        }
        if (end < 100) {
            return tens[numString[0]] + " Million and " + humanize(end);
    } else {
        // check it out 
            if( beginning < 20){
                
                return ones[numString[beginning]] + humanize(end)
            }
            return tens[numString[0]]+ humanize(end);
        }
    }


}

console.log(humanize(23100)); // 5
console.log(humanize(19100)); // 5
// console.log(humanize(234587)); // 6
// console.log(humanize(3000000)); // 7
// console.log(humanize(3287456)); // 7
// console.log(humanize(3287456)); // 7
// console.log(humanize(13287456)); // 8
// console.log(humanize(23287456)); // 8
