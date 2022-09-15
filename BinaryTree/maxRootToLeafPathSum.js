class node{
  constructor(val){
    this.val=val;
    this.left=null;
    this.right=null;
  }
}
const a=new node(5)
const b=new node(11)
const c=new node(3)
const d=new node(4)
const e=new node(2)
const f=new node(1)
a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

//take the sum from the root to each leaf node and find the sum
//treat null nodes as -inf since you are looking for the maximum path
//return the node value when both children are null, making it a leaf node

/*
              5
           /     \
         11       3
       /   \     /  \
      4     2  -inf  1

*/

const maxPathSum=(root)=>{
  if(root===null)return -Infinity
  if(root.left===null && root.right===null)return root.val;
  const maxChildPathSum=Math.max(maxPathSum(root.left),maxPathSum(root.right))
  return root.val+maxChildPathSum
}

