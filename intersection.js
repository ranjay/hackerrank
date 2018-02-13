/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(a, b) {
    lena = a.length;
    lengb = b.length
    if (lena > lengb) {
        small = b
        big = a
    } else {
        small = a
        big = b
    }
    j = small.length - 1

    for (i = 0; i <= big.length - j; i++) {
        comp = big.slice(0, j)
        if (comp == small) {
            return small;
        }
    }
};
d=intersect([],[1])
console.log(d)
