function solution(str) {

    if (str.length % 2 == 1) {
        str.concat("_");
    }
    var result = Array.of(str).map(function(elem, idx, arr) {
        elem.concat(arr[idx - 1]);
    });

    return result.filter(function(elem, idx) {
        return idx % 2 == 0;
    });

}