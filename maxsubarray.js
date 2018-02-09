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
        // console.log(subarraysize)
        // console.log(max)

        if (subarraysize >0) {
            if (sasize == 1) {
                a1 = a.map(x => x % m); 
                m1 = Math.max(...a1)
                if (m1 > max) {
                    max = m1
                }

            } else if (sasize ==  a.length) {
                s2 = sum(a);
                s4 = s2 % m
                if (s4 > max) {
                    max = s4
                }
            } else {
                for (i = 0; i < subarraysize; i++) {
                    s1 = a.slice(i, sasize + i)
                   
                    if (s1.length > 0) {
                        sm = sum(s1);
                       
                        s3 = sm % m
                       
                        if (s3 > max) {
                          
                            max = s3
                          
                        }
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
