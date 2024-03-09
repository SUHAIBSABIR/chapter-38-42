// function average(sub1, sub2, sub3) {

//     return sub1 + sub2 + sub3 / 3;

// }


// function percen(totalmarks, scored) {

//     return (totalmarks / (scored * 100)) * 100;

// }

// function main(sub1, sub2, sub3) {

//     var avag = average(sub1, sub2, sub3)
//     // var percent = percen(totalmarks, scored)
//     var total = sub1 + sub2 + sub3
//     // console.log(avag(10, 20, 30))
// }

// main(2, 3, 4);

// // console.log("dj")


// // function avarage(sub1, sub2, sub3) {

// //     return (sub1 + sub2 + sub3) / 3


// // }

// // function percentage(totalMarks, scoredMarks) {

// //     return (scoredMarks / totalMarks)

// // }

// // function main(sub1, sub2, sub3) {

// //     var avag = avarage(sub1, sub2, sub3)
// //     var total = sub1 + sub2 + sub3
// //     var pern = percentage(total, total * 3)

// //     console.log("Average Marks: " + avag);
// //     console.log("Percentage: " + pern + "%");

// // }
// // console.log(main(20, 40, 3))



// function avarage(sub1, sub2, sub3) {

//     return (sub1 + sub2 + sub3) / 3
// }

// function percantage(totalMarks, obtainMarks) {

//     return (obtainMarks / totalMarks) * 100


// }
// function mainfunction(sub1, sub2, sub3) {
//     var avg = average(sub1, sub2, sub3);
//     var totalMarks = sub1 + sub2 + sub3;
//     var percen = percentage(totalMarks, 500); // Assuming total marks for all subjects is 500

//     console.log("Average: " + avg);
//     console.log("Percentage: " + percen + "%");
// }
// console.log(main(50, 30, 40))


// //qes 3


// function area(a, b, c) {

//     let s = (a + b + c) / 2

//     let ara = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return ara;


// }
// var a = 5;
// var b = 5;
// var c = 2;
// var ss = area(a, b, c)
// console.log(ss)

// function indexof(str, char) {

//     for (i = 0; i <= i.length; i++) {
//         if (str[i] === char) { return i }
//     }




// }
// let str = "hello";
// var indexofs = indexof(str, "e")

// console.log(indexofs)

// var str = "suhaib"

// for (i = 0; i < str.length; i++) {

//     if (str[i] === "s") {
//         console.log("found")
//     }


// }

// function index(str, char) {

//     for (i = 0; i < str.length; i++) {

//         if (str[i] === char) {
//             return i;
//         }
//     }

// }
// var strs = "suhaib";
// var indexs = index(strs, "i")
// console.log(indexs)


// function indexof(char, str) {

//     for (i = 0; i < str.length; i++) {
//         if (str[i] === char) {

//             return 1

//         }
//         return -1
//     }
// }
// var str = "suhaib";
// var find = indexof("w", str)
// var str = "suhaib";
// console.log(find)


// function returnStr(str) {
//     var revers = ""
//     for (i = str.length - 1; i >= 0; i--) {

//         revers += str[i]

//     }
//     return revers
// }
// let input = "suhaib"
// var ret = returnStr(input)
// console.log(ret)



function reverse(str) {
    var reverses = ""
    for (var i = str.length - 1; i >= 0; i--) {

        reverses += str[i]

    }
    return reverses
}
var strs = ""
var rev = reverse(strs)
console.log(rev)



function checks(str, char) {

    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
        else if (str[i !== char]) {
            count - 1;
        }
    }
    return count

}

var strs = "";
var chars = "a";
var func = checks(strs, chars)

console.log(func)


function check(str, char) {

    var count = 0;
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === char) {
            count++

        }
    }
    return count;


}

var str = "suhaibbbb";

var char = "b";

var chec = check(str, char)
console.log(chec)



function reverses(str) {
    var empty = ""
    for (i = str.length - 1; i >= 0; i--) {

        empty += str[i]

    }

    return empty;


}
str = "hello";
var fun = reverses(str);

console.log(fun)




function check(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {

        if (str[i] === char) {

            count++
        }
    }

    return count;
}
str = "wowww";
var checks = check(str, "w")
console.log(checks)


function checkP(str) {
    for (var i = 0; i < Math.floor(str.length) / 2; i++) {

        if (str[i]) { }
    }
}

















