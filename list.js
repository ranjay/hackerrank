const readline = require('readline');
const fs = require('fs');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

const rl = readline.createInterface({
    input: fs.createReadStream('input/test.txt'),
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

function sum(numbers) {
    return numbers.reduce(function(a, b) {
        return parseInt(a) + parseInt(b)
    });
}
var Node = function(data) {
    this.data = data;
    this.pos = 0;
    this.next = null;
}
var d = new Node("3");

// This is a "method-only" submission.
// You only need to complete this method.
var cupos = 0;

function insert(data) {
    if (!this.next) {
        var l = new Node(data);
        d.next = l
        this.next = d.next;
        cupos = cupos + 1;
        l.pos = cupos;
    } else {
        while (this.next != null) {
            var l = new Node(data);
            cupos = cupos + 1;
            l.pos = cupos;
            this.next.next = l
            this.next = this.next.next


            break;
        }
    }

}

function inserta(data, i) {
    var cupos = 0;
    var _this = d;
    if (!this.next) {
        var l = new Node(data);
        d.next = l
        this.next = d.next;
        cupos = cupos + 1;
        l.pos = cupos;
    } else {
        while (_this.next != null) {
            console.log(_this.pos)
            if (_this.pos == i - 1) {
                var l = new Node(data);
                l.pos = i;
                l.next = _this.next;
                _this.next = l
                break
            }
            _this = _this.next
        }
    }
}





function main() {
    
    s=input_stdin.split("\n");
    var q = s[1]
   
   console.log(q)

    for (var a0 = 2; a0 <= q+; a0++) {
       console.log(d)
        var n_temp = s[a0].split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        console.log("k")
        if(a0==1){
          d=new Node(n) 
           insert(n, m); 
        }else if(a0==q){
          inserta(n, m);
        }else{
          insert(n, m);
        }
    }
    var _this = d;
    var str = ""
    while (_this.next != null) {
       
        str = str + _this.data
        _this = _this.next
    }
    console.log(str)
}