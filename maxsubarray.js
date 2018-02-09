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
                console.log(s1)
                if (s1.length > 0) {
                    sm = sum(s1);
                    s3 = sm % m

                    if (s3 > max) {
                        max = s3
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

var s = maximumSum([3, 3, 9, 9, 5], 7)
console.log(s)
