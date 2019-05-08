function isValidWalk(walk) {
    var horizontalStep = 0;
    var verticalStep = 0;

    walk.forEach(function(step) {
        switch (step) {
            case 'n':
                verticalStep++;
                break;
            case 's':
                verticalStep--;
                break;
            case 'e':
                horizontalStep++;
                break;
            case 'w':
                horizontalStep--;
                break;
        }
    });

    return horizontalStep == 0 && verticalStep == 0 && walk.length == 10;
}

expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
expect(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
expect(!isValidWalk(['w']), 'should return false');
expect(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');

function expect(logik, message) {
    console.log("result " + (logik ? 'rendben' : 'hibás') + ", and message is: " + message);
}