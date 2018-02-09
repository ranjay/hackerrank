function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype.push = function(val) {
    var root = this.root;
    var currentNode;
    console.log(root)
    if (root != null) {
        var d = Node();
        console.log(d.value)

    } {
        var n = new Node();
        n.value = val;
    }
   

}

var bst = new BinarySearchTree();
bst.push(3);
