//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(function(el) {

        var reg = /[:;](-|~)*[D]/;

        console.log(el + " " + el.match(reg));

        return el.match(reg) != null;
    }).length;

}



assertEquals(countSmileys([':D', ':~)', ';~D', ':)']), 4);
assertEquals(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);


function assertEquals(result, required) {
    console.log(`eredmény: ${result}, elvárt: ${required}`);
}