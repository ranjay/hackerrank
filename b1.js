 var bst = {
     node: 20,
     left: '',
     right: {
         node: 28,
         left: {
             node: 12,
             left: '',
             right: ''
         },
         right: {
             node: 58,
             left: '',
             right: ''
         }
     }
 }


 function newnode(val) {
     var json = '{"node": ' + val + ', "left": "", "right": ""}';
     obj = JSON.parse(json);
     return obj;
 }

 function bs(bsv) {
     if (bsv.left == '' && bsv.right == '') {
         console.log(bsv)
         return false;
     } else {
         var keys = Object.keys(bsv);
         let last = ""
         keys.forEach(function(i, val) {
             last = bsv[keys[val]];
             bs(last)
         });
     }


     // var d=bst[keys[0]]

     // if (bst.node.length == 0) {
     //         bst.node = val
     //     } else {
     //         if (bst.left == "" && bst.node > val) {
     //             bst.left = newnode(val)
     //         } else if (bst.right == "" && bst.node < val) {
     //             bst.right = newnode(val)
     //         } else {

     //         }
     //     }
 }

 bs(bst)
