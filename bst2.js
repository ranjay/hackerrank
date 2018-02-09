function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.find = function(val) {
    var root = this.root;
    if (!root) {
        this.root = new Node(val);

        return;
    }

    var currentNode = root;

    var newNode = new Node(val);

    while (true) {
        console.log(currentNode.value)
        if (currentNode.value==val){
            console.log(currentNode)
            break;
        }
        
        else {
            if (val < currentNode.value) {

                currentNode = currentNode.left;

            } else {

                currentNode = currentNode.right

            }
        }
    }

}

BinarySearchTree.prototype.push = function(val) {
    var root = this.root;
    console.log(root)
    if (!root) {
        this.root = new Node(val);

        return;
    }

    var currentNode = root;

    var newNode = new Node(val);

    while (true) {
        
        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            } else {
                currentNode = currentNode.right
            }
        }
    }

}
var bst = new BinarySearchTree();
bst.push(8);
bst.push(12);
bst.push(6);
bst.push(62);
bst.push(2);
bst.find(6);


