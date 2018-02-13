/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var reverse = function(string) {
    return string.split('').reverse().join('');
}
var addBinary = function(a, b) {
    lena = a.length;
    lengb = b.length
    if (lena > lengb) {
        small = b
        big = a
    } else {
        small = a
        big = b
    }
    expand = ""
    console.log(big)
    console.log(small)
    diff = big.length - small.length
    console.log(diff)

    expand=""
    if (diff > 0) {
        for (i = 0; i < diff; i++) {
            console.log("nnn")
            expand = expand + "0";
          
        }
    }
    small=expand+small;

    console.log(small);
    smallex = expand + small;
    f = ""
    reminder = "0"
    for (i = big.length - 1; i >= 0; i--) {
        console.log("mewmcmec")
        console.log(big[i])
        console.log(small[i])
        if (big[i] == 0 && small[i] == 0) {
            if (reminder == "1") {
                add = 1
            } else {
                add = 0
            }
            f = f + add
            reminder = "0"
        } else if ((big[i] == 0 && small[i] == 1) || (big[i] == 1 && small[i] == 0)) {
            if (reminder == "1") {
                add = 0
                reminder = "1"
            } else {
                add = 1
                reminder = "0"
            }
            f = f + add
            console.log(f)
        } else if (big[i] == "1" && small[i] == "1") {
            console.log("mmm")
            if (reminder == "1") {
                add = "1"
                
            } else {
                add = "0"
               
            }
            reminder = "1"
            f = f + add
          
            console.log(f)
        }
        if (i == 0 && reminder == "1") {

            f = f + "1"
        }
    }
    return reverse(f);
}


d = addBinary("1111", "1111")
console.log(d)
