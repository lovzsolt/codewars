function nbYear(p0, percent, aug, p) {
    var count = 0;   
    while(p0<p){
        p0 += p0 * percent/100 + aug;
        count++;
    }
    return count;
}

function nbYear2(p0, percent, aug, p) {
    if(p0 >= p) {
      return 0;
    } else {
      return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
    }
  }
const startDate = Date.now();
console.log(nbYear2(1000,10, 300, 3000))
console.log(Date.now()-startDate+"ms");
