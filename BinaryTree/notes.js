/**
 
The first node on a tree is called the root
Nodes that point to another node have a parent-child relationship
a leaf node is a node with zero children

binary tree is a tree where every node has at most, 2 children per node
there can be 1 children and still be considered a binary tree. 
Binary trees have exactly 1 root
  
Exactly 1 path between a root and any node in the tree

example:
     A
   /   \
  B     C
 / \     \
D   E     F
 
This is still considered a binary tree
A
|
B

This is still considered a binary tree
A

Empty trees are also considered an binary tree
_

This is not a binary tree since you can infinitely cycle between B,C,D and have infinite number of paths
  A
  |
  B
/  \
C _ D


You can represent every node as an object
you also need pointers to connect the node to its children,
the pointers will be properties of the object.
null is used when there is no left or right child node
               node
                A
    node.left /   \ node.right
              B     C
            / \      \
           D   E      F

**/


class Node {
  constructor(val){
    this.val=val;
    this.left=null;
    this.right=null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

// constructed tree:
//        a
//      /   \
//     b     c
//    / \     \
//   f   e     f