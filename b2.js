var list = [{
    "b": 1980,
    "d": 2015
}, {
    "b": 1981,
    "d": 1985
}, {
    "b": 1906,
    "d": 2015
}, {
    "b": 1989,
    "d": 2016
}, {
    "b": 1876,
    "d": 1928
}, {
    "b": 1982,
    "d": 2018
}, {
    "b": 2005,
    "d": 2018
}, {
    "b": 1917,
    "d": 2019
}]

var j = 0;
var ccount = 1;
var out = [];
var start = 0;

function cal() {
	if (start < list.length) {
        var b = list[j].b;
        i = start;
        for (i = 0; i < list.length; i++) {

            if (i == list.length - 1) {

                out.push({
                    "b": b,
                    "count": ccount
                });
                ccount = 1;
                j = j + 1;
                start = start + 1;
                cal();
            } else {
                var bnext = list[i + 1].b;
                var dnext = list[i + 1].d;
                console.log(bnext)
                console.log(b)
                console.log(dnext)
                if ((b > bnext) && (b < dnext)) {
                    console.log(ccount)
                    ccount = ccount + 1

                }
            }

        }
    }
}
cal();
console.log(out);

function calMax() {
    var max = 0;
    var yr
    for (i = 0; i < out.length; i++) {
        if (i < out.length - 1) {
            if (out[i].count > out[i + 1].count) {
            	max=out[i].count
            	yr=out[i].b
            }
        }

    }
    return yr;
}
d=calMax();
console.log(d)
