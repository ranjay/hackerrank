class BST {

    constructor(val) {
    	this.value = val
        this.left = ""
        this.right = ""
    }

    insert(value) {
    	
    	if (value <= this.value) {
            if (this.length == 0) {
                this.left = new BST(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if (value > this.value) {
            	console.log(this.right.length)
            	if (this.right.length == 0) {
                    this.right = new BST(value)
                } else {
                    this.right.insert(value)
                }
            }
        }
    }


    contain(value){

    }
}

let log = (value) => {
    console.log(value)
}

let bst = new BST(50);
bst.insert(70);
bst.insert(80);
bst.insert(90);

