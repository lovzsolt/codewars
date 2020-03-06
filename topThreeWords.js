function topThreeWords(text) {

text = text.replace('//', '');
    let myMap = new Map();
    text.split(" ").forEach(element => {
        if (element !== '') {
            let counter = myMap.get(element) | 0;
            myMap.set(element, ++counter)
        }
    });
    let orderedMap = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
    
    return Array.from(orderedMap.keys()).slice(0,3);
};

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));