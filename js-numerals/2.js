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
        "nineteen"
    ];
    var tens = [
        "",
        "ten",
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

    let beginning = +(numString.slice(0, 2)); // for number with length (5,8,11,14)
    // console.log(2 + beginning);

    if (num < 0) throw new Error("Negative numbers are not supported.");
    if (num.length === 1 && num === 0 ) return "zero";

    //the case of 1 - 10
    if (num < 10) {
        return ones[num];
    }

    // connect to beginning 
    if (numString.length === 2) {
        return(num < 20)? ones[beginning] : tens[numString[0]] + " " + ones[numString[1]];
    }


    //100 - 999 
    if (numString.length == 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return ones[numString[0]] + " Hundred";
        else
            return (
                ones[numString[0]] +
                " Hundred and " +
                humanize(+(numString[1] + numString[2]))
            );
    }

    // 1,000 - 9,999
    if (numString.length === 4) {
        let end = +numString.slice(1);

        if (end === 0) {
            return ones[numString[0]] + " Thousand";
        }
        else {
            return ones[numString[0]] + " Thousand " + humanize(end);
        }
    }

             // 10,000 - 99,999 connect to beginning part
    if (numString.length === 5) {
        let end = +numString.slice(2);

        return (beginning < 20)? ones[beginning] + ' Thousand ' + humanize(end)
            : tens[numString[0]]+ ones[numString[1]] + ' Thousand ' + humanize(end);
    }
    
             // 100,000  - 999,999
    if (numString.length === 6) {
        let end = +numString.slice(1);

        if (end == 0 ) {
            return ones[numString[0]] + " Hundred Thousand ";
        }
        else {
            return ones[numString[0]] + " Hundred  " + humanize(end);
        }
    }

            // 1,000,000 - 9,999,999
    if (numString.length === 7) {
        let end = +numString.slice(1);

        if (end === 0) {
            return ones[numString[0]] + " Million ";
        } else {
            return ones[numString[0]] + " Million and " + humanize(end);
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
            if (beginning < 20) {
                return ones[numString[beginning]] + humanize(end);
            }
            return tens[numString[0]] + humanize(end);
        }
    }
}
console.log(humanize(1000000)); // 

console.log(humanize(1099103)); // 
console.log(humanize(190100)); // 
console.log(humanize(20000002)); // 
console.log(humanize(9999999)); // 
console.log(humanize(9000000)); // 
console.log(humanize(1200007)); // 6
// console.log(humanize(3000000)); // 7
// console.log(humanize(3287456)); // 7
// console.log(humanize(3287456)); // 7
// console.log(humanize(13287456)); // 8
// console.log(humanize(23287456)); // 8