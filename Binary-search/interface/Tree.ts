import {TreeNode} from "../src/TreeNode";

export interface Tree<G> {
    insert(data: G): TreeNode<G>;
    inorder(node: TreeNode<G> | null): void;
    deleteData(data: G): boolean;
    getSize(): number;
}