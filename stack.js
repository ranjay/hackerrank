let currentNode = null
class Stack {
    constructor() {
        this.stack = [];

    }

    push(val) {
    	console.log()
    	this.stack.push(val)
    }
    pop(){
    	let length=this.stack.length;
    	let last=this.stack[length-1]
    	this.stack.splice(-1,1)
    	return last
    }

}

let d = new Stack()
d.push(40)
d.push(80)

d.push(70)
d.pop()
console.log(d)
