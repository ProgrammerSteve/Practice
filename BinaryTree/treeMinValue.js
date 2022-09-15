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
const e=new node(15)
const f=new node(12)
a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;

//treat the null nodes connected to the leaf nodes as value infinity
/*
                5
            /       \
         11           3
       /     \      /    \
      4       15  inf    12
    /   \    /   \      /  \
   inf  inf inf  inf  inf  inf
*/

const depthFirstValueMin=(root)=>{
  const stack=[root]
  let min=Infinity;
  while(stack.length>0){
    const current=stack.pop()
    if(current.val<min)min=current.val
    if(current.right)stack.push(current.right)
    if(current.left)stack.push(current.left)
  }
  return min
}

const breadthFirstValueMin=(root)=>{
  const queue=[root]
  let min=Infinity;
  while(queue.length>0){
    const current=queue.shift()
    if(current.val<min)min=current.val
    if(current.left)queue.push(current.left)
    if(current.right)queue.push(current.right)
  }
  return min
}

const recursiveTreeMin=(root)=>{
  if(root===null)return Infinity
  const leftmin=recursiveTreeMin(root.left)
  const rightmin=recursiveTreeMin(root.right)
  return Math.min(root.val,leftmin,rightmin)
}

const resp1=depthFirstValueMin(a)
const resp2=breadthFirstValueMin(a)
const resp3=recursiveTreeMin(a)
console.log('depth:',resp1)
console.log('breadth:',resp2)
console.log('recursive:',resp3)