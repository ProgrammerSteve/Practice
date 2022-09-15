class node{
  constructor(val){
    this.val=val
    this.left=null
    this.right=null
  }
}

const a=new node(3)
const b=new node(11)
const c=new node(4)
const d=new node(4)
const e=new node(2)
const f=new node(1)
a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;


const sumTreeDepthFirstValue=(root)=>{
  if(root===null)return 0
  const stack=[root]
  let sum=0
  while(stack.length>0){
    const current=stack.pop()
    console.log('depth:',current.val)
    sum=sum+current.val
    if(current.right)stack.push(current.right)
    if(current.left)stack.push(current.left)
  }
  console.log(sum)
  return sum
}

const sumTreeBreadthFirstValue=(root)=>{
  if(root===null)return 0
  const queue=[root]
  let sum=0
  while(queue.length>0){
    const current=queue.shift()
    console.log('breadth:',current.val)
    sum=sum+current.val
    if(current.left)queue.push(current.left)
    if(current.right)queue.push(current.right)
  }
  console.log(sum)
  return sum
}

/*
  nulls can be thought of as zeros
  when solving this recursively

             3
          /    \
        11       4
      /   \     /  \
     4     2   0    1
    / \   / \      /  \
   0   0 0   0    0    0


            3(25)
          /      \
        11(17)   4(5)
      /   \      /  \
     4(4) 2(2)  0   1(1)
    / \   / \       /  \
   0   0 0   0     0    0

*/ 
const sumTreeRecursive=(root)=>{
  if(root===null)return 0
  return root.val + sumTreeRecursive(root.left) + sumTreeRecursive(root.right)
}

sumTreeDepthFirstValue(a)
sumTreeBreadthFirstValue(a)
const resp=sumTreeRecursive(a)
console.log('recursive',resp)