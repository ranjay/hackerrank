const readline = require('readline');
const fs = require('fs');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

const rl = readline.createInterface({
    input: fs.createReadStream('input/maxsubarray_input01.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    input_stdin += "\n"+line;
}).on('close', () => {
    
    input_stdin_array = input_stdin.split("\n");
    //console.log(input_stdin_array)
    main();
});

function readLine() {
    
    return input_stdin_array[input_currentline++];
}
/////////////// ignore above this line ////////////////////

function sum(numbers) {
    return numbers.reduce(function(a, b) {
        return parseInt(a) + parseInt(b)
    });
}


function maximumSum(a, m) {
    var max = 0;

    var subarraysize = a.length;

    var sasize = 1;


    function subar(subarraysize, sasize) {
        if (subarraysize >= 0) {
            for (i = 0; i < subarraysize; i++) {
                s1 = a.slice(i, sasize + i)
                if (s1.length > 0) {
                    sm = sum(s1);
                    s3 = sm % m

                    if (s3 > max) {
                        max = s3
                        break;
                    }
                }
            }
            subarraysize = subarraysize - 1
            sasize = sasize + 1
            subar(subarraysize, sasize)
        }
    }
    subar(subarraysize, sasize)

    return max;
}

var d=[]

function main() {
    var q = parseInt(readLine());
    var q = parseInt(readLine());
    //console.log(q)
    console.log(Date())
    for (var a0 = 0; a0 < q; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        a = readLine().split(' ');
        a = a.map(Number);
        var result = maximumSum(a, m);
        //d.push(result)
        console.log(result)
    }
     console.log(Date())
    //console.log(d.length)

}
