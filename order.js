function order(words) {

    var sortedWords = words.split(" ").sort(function(a, b) {
        var reg = /[0-9]/;
        console.log(a.search(reg));
        return a[a.search(reg)] - b[b.search(reg)];
    }).join(" ");


    return sortedWords;

}



write(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
write(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
write(order(""), "")



function write(a, b) {

    console.log(`[eredmény]: ${a}, [elvárt]: ${b}`);

}