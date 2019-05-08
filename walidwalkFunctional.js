function isValidWalk(walk) {
    const horizontalStep = walk.filter(function(hStep) { return (hStep == 'e' || hStep == 'w') })
        .reduce(function(sum, step, idx, array) {
            if (array[0] == step) {
                return sum + 1;
            } else {
                return sum - 1;
            }
        }, 0);
    const verticalStep = walk.filter(function(vStep) { return (vStep == 'n' || vStep == 's') })
        .reduce(function(sum, step, idx, array) {
            if (array[0] == step) {
                return sum + 1;
            } else {
                return sum - 1;
            }

        }, 0);

    return horizontalStep == 0 && verticalStep == 0 && walk.length == 10;
}

var i = 0;
expect(i++, isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
expect(i++, !isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
expect(i++, !isValidWalk(['w']), 'should return false');
expect(i++, !isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');



function expect(lepes, logik, message) {
    console.log(lepes + ". lépés, eredmény: " + (logik ? 'rendben' : 'hibás') + ", üzenet: " + message);
}