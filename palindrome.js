let steps = 0;

var palindromeChainLength = function(n) {


    if (n.toString().length == 1)
        return steps;
    const nString = n + "";
    const backString = Array.from(nString).reverse().join("");
    var returnSteps = steps;
    if (nString == backString) {
        steps = 0;
        return returnSteps;
    } else {
        nextN = n + Number.parseInt(backString);
        steps++;
        return palindromeChainLength(nextN);
    }
};


console.log(palindromeChainLength(87) == 4);

console.log(palindromeChainLength(13) == 1);