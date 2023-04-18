
import {TreeNode} from "./TreeNode";
import {Tree} from "../interface/Tree";

export class BinaryTree<G> implements Tree<G> {
    root: TreeNode<G> | null;
    totalNode: number;
    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
    insert(data: G): TreeNode<G> {
        if (!this.root) {
            this.root = new TreeNode<G>(data);
            this.totalNode ++;
            return this.root;
        } else {
            let node = new TreeNode<G>(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data === currentNode.data) {
                    throw new Error('Node data existed')
                } else if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (data > currentNode.data) {
                        if (!currentNode.right) {
                            currentNode.right = node;
                            break;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
            this.totalNode ++;
            return currentNode;
        }
    }

    getSize(): number {
        return this.totalNode;
    }

    searchData(data: G) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return currentNode;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return null;
    }

    findParentOfNode(data: G) {
        let node = this.searchData(data);
        if (node) {
            if (node === this.root) {
                return null;
            } else {
                let parentNode = this.root;
                while (parentNode) {
                    if (parentNode.left === node || parentNode.right === node) {
                        return parentNode;
                    } else {
                        if (node.data < parentNode.data) {
                            parentNode = parentNode.left;
                        } else if (node.data > parentNode.data) {
                            parentNode = parentNode.right;
                        }
                    }
                }
            }
        }
        return undefined;
    }

    deleteData(data: G): boolean {
        let currentNode = this.searchData(data);
        let parentNode = this.findParentOfNode(data);
        if (currentNode) {
            if (!currentNode.left) {
                if (parentNode) {
                    if (parentNode.left === currentNode) {
                        parentNode.left = currentNode.right;
                    } else {
                        parentNode.right = currentNode.right;
                    }
                    currentNode.right = null;
                    this.totalNode --;
                    return true;
                } else if (parentNode === null) {
                    this.root = currentNode.right;
                    currentNode.right = null;
                    this.totalNode --;
                    return true;
                } else if (parentNode === undefined) return false;
            } else if (currentNode.left){
                let parentRightMost = currentNode.left;
                let rightMost = parentRightMost.right;
                if (rightMost) {
                    while (rightMost.right) {
                        parentRightMost = rightMost;
                        rightMost = rightMost.right;
                    }
                    currentNode.data = rightMost.data;
                    parentRightMost.right = rightMost.left;
                    rightMost.left = null;
                    this.totalNode --;
                    return true;
                } else {
                    currentNode.data = parentRightMost.data;
                    currentNode.left = parentRightMost.left;
                    parentRightMost.left = null;
                    this.totalNode --;
                    return true;
                }
            }
        }
        return false;
    }


    inorder(node: TreeNode<G> | null): void {
        if (node) {
            if (node.left) {
                this.inorder(node.left);
            }
            console.log(node.data);
            if (node.right) {
                this.inorder(node.right);
            }
        }
    }
    preorder(node: TreeNode<G> | null): void {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    }
    postorder(node: TreeNode<G> | null): void {
        if (node) {
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
            console.log(node.data);
        }
    }
}