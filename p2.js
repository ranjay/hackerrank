by = [1920, 1921, 1920]
dy = [2000, 2001, 1999]

// birth_range = "1920-1922"
// date_range = "2000-2001"
// output_tange = "1920-2001"
var pop = [];
var count = [];



function foo(arr) {
    var a = [],
        b = [],
        prev;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}
var result = foo(by);
result[0]


var result1 = foo(dy);
result1[0]


var d=Math.max(...b1)
var d1=b1.indexOf(d)

console.log(result[0][d1])

