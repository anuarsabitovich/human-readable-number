module.exports = function toReadable(number) {
    // numbers to get from
    let singleNumber = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let teen = [
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
    let tenth = [
        "correction", // add this correction in array to correct the final result of reversedArray[2]
        "correction", // add this correction in array to correct the final result of reversedArray[2]
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundred = ["hundred"];
    //
    let finalArray = []; // array to push the numbers
    let arrayOfNumber = Array.from(String(number), Number); // making an array from a number
    let reversedArray = arrayOfNumber.reverse(); // reverse array to search through using index
    //
    // if number is less than 10
    if (number < 10) {
        finalArray.push(singleNumber[reversedArray[0]]);
    }
    // if number is between 10-20
    if (number >= 10 && number < 20) {
        finalArray.push(teen[reversedArray[0]]);
    }
    // if number is more than 20
    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            // if number is tenth
            finalArray.push(tenth[reversedArray[1]]);
        } else {
            // combining two digits from two arrays, tenth and singles
            finalArray.push(tenth[reversedArray[1]]);
            finalArray.push(singleNumber[reversedArray[0]]);
        }
    }
    // if number is more than a hundred
    let tenth2 = number % 100; // making variable to push correct numbers from 1-100
    if (number >= 100) {
        if (number % 100 == 0) {
            // combining two arrays single and hundred
            finalArray.push(singleNumber[reversedArray[2]]);
            finalArray.push(hundred[0]);
        } else {
            finalArray.push(singleNumber[reversedArray[2]]); // first digit
            finalArray.push(hundred[0]); // hundred word
            if (tenth2 < 10) {
                finalArray.push(singleNumber[reversedArray[0]]);
            }
            if (tenth2 >= 10 && tenth2 < 20) {
                finalArray.push(teen[reversedArray[0]]);
            }
            if (tenth2 >= 20 && tenth2 < 100) {
                if (tenth2 % 10 == 0) {
                    // if number is tenth
                    finalArray.push(tenth[reversedArray[1]]);
                } else {
                    // combining two digits from two arrays, tenth and singles
                    finalArray.push(tenth[reversedArray[1]]);
                    finalArray.push(singleNumber[reversedArray[0]]);
                }
            }
        }
    }
    return finalArray.join(" ");
};
