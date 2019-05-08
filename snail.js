snail = function(array) {
  var xBegin = 0;
  var xEnd = array.length-1;
  var yBegin = 0;
  var yEnd = array.length-1;
  
  var ret = new Array;
  while(xEnd-xBegin >=0 && yEnd-yBegin >=0){
    var x=xBegin;
    while (x<=xEnd){
      ret.push(array[yBegin][x++]);
    };
    
    var y = ++yBegin;
    while (y<=yEnd){
      ret.push(array[y++][xEnd]);
    }
    x = --xEnd;
    while(x>=xBegin){
      ret.push(array[yEnd][x--]);
    }
    y = --yEnd;
    while(y>=yBegin){
      ret.push(array[y--][xBegin]);
    }
    xBegin++;
  }
  return ret;
}


console.log("eredmény: "+snail([ [1,2,3],
        [4,5,6],
        [7,8,9]]));

console.log("eredmény: "+snail([ [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]]));

console.log("eredmény: "+snail([]));
