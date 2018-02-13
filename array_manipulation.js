const readline = require('readline');
const fs = require('fs');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

const rl = readline.createInterface({
    input: fs.createReadStream('input/am.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    input_stdin += "\n" + line;
}).on('close', () => {

    input_stdin_array = input_stdin.split("\n");
    //console.log(input_stdin_array)
    main();
});

function readLine() {

    return input_stdin_array[input_currentline++];
}
/////////////// ignore above this line ////////////////////
var list;
var max = 0;



function maximumSum(n, a, b, k) {
    curmax = Math.max(...list)
    ci = list.indexOf(curmax)
    if (a < ci < b) {
        max = curmax + k;
    } else {
        list[a - 1] = list[a - 1] + k
        list[b - 1] = list[b - 1] + k
    }
}
function main() {
    let n_temp = readLine().split(' ');
    n_temp = readLine().split(' ');
    let n = parseInt(n_temp[0]);
    let m = parseInt(n_temp[1]);
    let res = new Array(n).fill(0);
    let sum = 0;
    let max = 0;

  
    
    for(var a0 = 0; a0 < m; a0++){
        var a_temp = readLine().split(' ');
        var a = parseInt(a_temp[0]);
        var b = parseInt(a_temp[1]);
        var k = parseInt(a_temp[2]);


        res[a-1] += k;
        if (b<n) res[b]-=k;
       
    }
   console.log(res)
    console.log(max)
    for (let i=0; i<n; i++) {
         console.log(sum)
         sum += res[i];
        if (max < sum) max = sum;
    }
   
    console.log(max);
}


