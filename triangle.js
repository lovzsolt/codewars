function isTriangle(a, b, c) {
    var opt = false;
    if (Math.max(a, b, c) == a) {
        opt = b + c > a;
        console.log(opt);
    } else if (Math.max(a, b, c) == b) {
        opt = c + a > b
        console.log(opt);
    } else {
        opt = b + a > c
        console.log(opt);
    }

    return opt;


}



console.log('eredmény: ' + isTriangle(1, 2, 2));
console.log('eredmény: ' + isTriangle(7, 2, 2));