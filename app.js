function average(sub1, sub2, sub3) {

    return sub1 + sub2 + sub3 / 3;

}


function percen(totalmarks, scored) {

    return (totalmarks / (scored * 100)) * 100;

}

function main(sub1, sub2, sub3) {

    var avag = average(sub1, sub2, sub3)
    // var percent = percen(totalmarks, scored)
    var total = sub1 + sub2 + sub3
    // console.log(avag(10, 20, 30))
}

main(2, 3, 4);

// console.log("dj")


function avarage(sub1, sub2, sub3) {

    return (sub1 + sub2 + sub3) / 3


}

function percentage(totalMarks, scoredMarks) {

    return (scoredMarks / totalMarks)

}

function main(sub1, sub2, sub3) {

    var avag = avarage(sub1, sub2, sub3)
    var total = sub1 + sub2 + sub3
    var pern = percentage(total, total * 3)

    console.log("Average Marks: " + avag);
    console.log("Percentage: " + pern + "%");

}
console.log(main(20, 40, 3))







