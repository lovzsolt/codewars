
function formatDuration (seconds) {
        let duration = [{key: 'year', value: 365}, {key: 'day', value: 24}, {key: 'hour', value: 60}, {key: 'minute', value: 60}, {key: 'second', value: 1}];
        let modulo = 365*24*60*60;
        let resultMap = new Map();

        duration.forEach( d => {
            let modular = seconds % modulo;
            let res = (seconds - modular) /modulo
            if (res) resultMap.set( res >1 ? d.key+'s' : d.key, res);
            seconds = modular;
            modulo = modulo /d.value;
        });

        let result ="";
        resultMap.forEach( (v,k, map) =>{
            if(result)
                result += ', ';
            result +=  (`${v} ${k}`);
        });

        let lstIdx = result.lastIndexOf(',');
        if (lstIdx >0)
            result = result.substring(0, lstIdx) + ' and'+result.substring(lstIdx+1);
        
    return result;
}


console.log(formatDuration(3663));
  
  