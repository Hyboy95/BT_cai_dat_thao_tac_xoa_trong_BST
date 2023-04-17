export class TreeNode<G> {
    data: G;
    left: TreeNode<G> | null;
    right: TreeNode<G> | null;
    constructor(data: G) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}