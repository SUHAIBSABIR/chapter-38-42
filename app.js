// // // function average(sub1, sub2, sub3) {

// // //     return sub1 + sub2 + sub3 / 3;

// // // }


// // // function percen(totalmarks, scored) {

// // //     return (totalmarks / (scored * 100)) * 100;

// // // }

// // // function main(sub1, sub2, sub3) {

// // //     var avag = average(sub1, sub2, sub3)
// // //     // var percent = percen(totalmarks, scored)
// // //     var total = sub1 + sub2 + sub3
// // //     // console.log(avag(10, 20, 30))
// // // }

// // // main(2, 3, 4);

// // // // console.log("dj")


// // // // function avarage(sub1, sub2, sub3) {

// // // //     return (sub1 + sub2 + sub3) / 3


// // // // }

// // // // function percentage(totalMarks, scoredMarks) {

// // // //     return (scoredMarks / totalMarks)

// // // // }

// // // // function main(sub1, sub2, sub3) {

// // // //     var avag = avarage(sub1, sub2, sub3)
// // // //     var total = sub1 + sub2 + sub3
// // // //     var pern = percentage(total, total * 3)

// // // //     console.log("Average Marks: " + avag);
// // // //     console.log("Percentage: " + pern + "%");

// // // // }
// // // // console.log(main(20, 40, 3))



// // // function avarage(sub1, sub2, sub3) {

// // //     return (sub1 + sub2 + sub3) / 3
// // // }

// // // function percantage(totalMarks, obtainMarks) {

// // //     return (obtainMarks / totalMarks) * 100


// // // }
// // // function mainfunction(sub1, sub2, sub3) {
// // //     var avg = average(sub1, sub2, sub3);
// // //     var totalMarks = sub1 + sub2 + sub3;
// // //     var percen = percentage(totalMarks, 500); // Assuming total marks for all subjects is 500

// // //     console.log("Average: " + avg);
// // //     console.log("Percentage: " + percen + "%");
// // // }
// // // console.log(main(50, 30, 40))


// // // //qes 3


// // // function area(a, b, c) {

// // //     let s = (a + b + c) / 2

// // //     let ara = Math.sqrt(s * (s - a) * (s - b) * (s - c))
// // //     return ara;


// // // }
// // // var a = 5;
// // // var b = 5;
// // // var c = 2;
// // // var ss = area(a, b, c)
// // // console.log(ss)

// // // function indexof(str, char) {

// // //     for (i = 0; i <= i.length; i++) {
// // //         if (str[i] === char) { return i }
// // //     }




// // // }
// // // let str = "hello";
// // // var indexofs = indexof(str, "e")

// // // console.log(indexofs)

// // // var str = "suhaib"

// // // for (i = 0; i < str.length; i++) {

// // //     if (str[i] === "s") {
// // //         console.log("found")
// // //     }


// // // }

// // // function index(str, char) {

// // //     for (i = 0; i < str.length; i++) {

// // //         if (str[i] === char) {
// // //             return i;
// // //         }
// // //     }

// // // }
// // // var strs = "suhaib";
// // // var indexs = index(strs, "i")
// // // console.log(indexs)


// // // function indexof(char, str) {

// // //     for (i = 0; i < str.length; i++) {
// // //         if (str[i] === char) {

// // //             return 1

// // //         }
// // //         return -1
// // //     }
// // // }
// // // var str = "suhaib";
// // // var find = indexof("w", str)
// // // var str = "suhaib";
// // // console.log(find)


// // // function returnStr(str) {
// // //     var revers = ""
// // //     for (i = str.length - 1; i >= 0; i--) {

// // //         revers += str[i]

// // //     }
// // //     return revers
// // // }
// // // let input = "suhaib"
// // // var ret = returnStr(input)
// // // console.log(ret)



// // function reverse(str) {
// //     var reverses = ""
// //     for (var i = str.length - 1; i >= 0; i--) {

// //         reverses += str[i]

// //     }
// //     return reverses
// // }
// // var strs = ""
// // var rev = reverse(strs)
// // console.log(rev)



// // function checks(str, char) {

// //     var count = 0;
// //     for (var i = 0; i < str.length; i++) {
// //         if (str[i] === char) {
// //             count++
// //         }
// //         else if (str[i !== char]) {
// //             count - 1;
// //         }
// //     }
// //     return count

// // }

// // var strs = "";
// // var chars = "a";
// // var func = checks(strs, chars)

// // console.log(func)


// // function check(str, char) {

// //     var count = 0;
// //     for (var i = 0; i <= str.length; i++) {
// //         if (str[i] === char) {
// //             count++

// //         }
// //     }
// //     return count;


// // }

// // var str = "suhaibbbb";

// // var char = "b";

// // var chec = check(str, char)
// // console.log(chec)



// // function reverses(str) {
// //     var empty = ""
// //     for (i = str.length - 1; i >= 0; i--) {

// //         empty += str[i]

// //     }

// //     return empty;


// // }
// // str = "hello";
// // var fun = reverses(str);

// // console.log(fun)




// // function check(str, char) {
// //     var count = 0;
// //     for (var i = 0; i < str.length; i++) {

// //         if (str[i] === char) {

// //             count++
// //         }
// //     }

// //     return count;
// // }
// // str = "wowww";
// // var checks = check(str, "w")
// // console.log(checks)


// // function checkP(str) {
// //     for (var i = 0; i < Math.floor(str.length) / 2; i++) {

// //         if (str[i]) { }
// //     }
// // }
// // function checkP(str) {



// //     var b = str.split("").reverse().join("")
// //     return b === str


// // }
// // console.log(checkP("wow"))


// // function check(str) {
// //     var left = 0;
// //     var right = str.length - 1

// //     while (left < right) {
// //         if (str[left] !== str[right]) {
// //             return false;
// //         }
// //         left++
// //         right--
// //     }
// //     return true

// // }
// // let a = check("sos")
// // console.log(a)


// // function ss() {

// //     var name = "suhaib";
// //     var s = 212;

// //     console.log(s)
// //     console.log(name)

// // }
// // ss()



// // . Write a function to delete all vowels from a sentence. Assume 
// // that the sentence is not more than 25 characters long.


// // function deleteVowel(str) {

// //     for (var i = 0; i < str.length; i++) {

// //         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {


// //             return true
// //         }


// //     }
// //     return false;

// // }
// // console.log(deleteVowel("shshsh"))





// // FUNCTION TO CHECK IS  THE VOVEL PRECENT OR NOT

// // function check(str) {

// //     for (i = 0; i < str.length; i++) {
// //         if (str[i] === "a" || str[i] === "e" || str[i] === "i") {


// //             return true;
// //         }
// //     }
// //     return false;
// // }


// // console.log(check("hello"))



// function deelete(str) {

//     result = "";
//     for (var i = 0; i < str.length; i++) {


//         if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
//             result += str[i]
//         }
//     }
//     return result
// }

// // str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"


// console.log(deelete("hello"))

// function deleteVovel(str) {

//     var result = ""
//     for (i = 0; i < str.length; i++) {

//         if (str[i] === "u" && str[i] === "a" && str[i] === "i" && str[i] === "e") {

//             result += str[i]
//         }
//     }
//     return result;
// }
// console.log(deleteVovel("suhaib"))



// function dele(str) {

//     var withoutVovel = ""
//     for (var i = 0; i < str.length; i++) {

//         if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
//             withoutVovel += str[i]
//         }
//     }
//     return withoutVovel;
// }
// console.log(dele("suhaibbb"))


// function sum(a, b, c, d) {

//     var sums = a + b + c + d

//     return sums
// }
// console.log(sum(1, 2, 3, 4))

// Create a function that finds and returns the highest number in an array of numbers.


// Assume the first number in the array is the highest (initialize a variable to hold this value).
// Loop through the array.
// For each number, if the current number is greater than the highest number you've stored, update your highest number variable with the current number.
// After the loop completes, return the highest number

// function count(number) {

//     highest = number[0];

//     for (var i = 0; i <= number.length; i++) {

//         if (number[i] > highest) {

//             highest = number[i]
//         }
//     }
//     return highest
// }
// var num = [1, 2, 3, 1114, 5, 6, 232]
// console.log(count(num))



// function findHighestNumber(num) {

//     highest = num[0];

//     for (var i = 0; i <= num.length; i++) {

//         if (highest < num[i]) {

//             highest = num[i]
//         }

//     }
//     return highest

// }
// nums = [0, 22, 3, 1]
// console.log(findHighestNumber(nums))



// find lowest number

function find(num) {

    lowest = num[0];

    for (i = 0; i <= num.length; i++) {

        if (num[i] < lowest) {

            lowest = num[i]
        }
    }
    return lowest
}
num = [22, 33, 44, 55, 3, 4, 2, 22]
console.log(find(num))












