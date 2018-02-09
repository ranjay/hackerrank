function stringSimilarity(s) {
    // Complete this function
    var sum = s.length;
    for (i = 1; i < s.length; i++) {
        match = s.substr(i, s.length);
        console.log(match)
        count = 0;
        for (j = 0; j < match.length; j++) {
        	console.log(match[j])
        	console.log(s[j])
            if (match[j] == s[j]) {
                count = count + 1
            } else{
            	break;
            }
        }
        console.log(count)
        sum = sum + count;
    }

    return sum;

}
d=stringSimilarity("ababaa")
console.log(d)
