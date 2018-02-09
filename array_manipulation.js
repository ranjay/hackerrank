process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

var max = 0;



function maximumSum(n, a, b, k) {
   
    list[a - 1] = list[a - 1] + k
    list[b - 1] = list[b - 1] + k
    if(list[a - 1]>max){
        max=list[a - 1]
    }
    if(list[a - 1]>max){
        max=list[b - 1]
    }
}

function maximumSum(n, a, b, k) {
    for (i = a; i <= b; i++){
        list[i - 1] = list[i - 1] + k
    }

  
}


function main() {
    var n_temp = readLine().split(' ');
    
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    list = new Array(n).fill(0);
    //console.log(m)
    for (var a0 = 0; a0 < m; a0++) {
        var a_temp = readLine().split(' ');
        var a = parseInt(a_temp[0]);
        var b = parseInt(a_temp[1]);
        var k = parseInt(a_temp[2]);
        maximumSum(n, a, b, k)
    }
    out = Math.max(...list)
    console.log(out)
}

