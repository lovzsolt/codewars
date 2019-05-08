function perimeter(n) {
    var cache = Array(n + 1);

    var multiplier = Array(n + 1).fill(0).reduce(function(accumulator, elem, index, arr) {
        if (index < 2)
            cache[index] = 1;
        else {
            cache[index] = cache[index - 1] + cache[index - 2];
        }
        console.log(`index: ${index} value: ${cache[index]}`);
        return accumulator = accumulator + cache[index];
    }, 0);



    return multiplier * 4;
}


perimeter(7);