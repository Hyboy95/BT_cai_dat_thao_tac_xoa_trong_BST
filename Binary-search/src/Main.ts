import {BinaryTree} from "./BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(20);
tree.insert(80);
tree.insert(15);
tree.insert(70);
tree.insert(89);
tree.insert(102);
tree.insert(18);
tree.insert(17);
tree.insert(19);
tree.insert(13);
tree.insert(14);


console.log(tree.deleteData(70));
// console.log(tree.findParentOfNode(80));
tree.inorder(tree.root);
// console.log(tree.totalNode);
