class Node{
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


//iterative solution
const breadthFirstValueIncludes=(target,root)=>{
  if(root===null && val!==null)return false
  if(root===null && val===null)return true
  const queue=[root];
  while(queue.length>0){
    const current=queue.shift()
    if(current.val===target)return true
    if(current.left)queue.push(current.left)
    if(current.right)queue.push(current.right)
  }
  return false
}
const resp=breadthFirstValueIncludes('j',a)
console.log(resp)


//recursive answer
const treeIncludes= (root,target) =>{
  if(root===null)return false;
  if(root.val===target)return true;
  return treeIncludes(root.left,target) || treeIncludes(root.right,target)
}




const depthFirstValueIncludes=(target,root)=>{
  if(root===null)return false
  const stack=[root]
  while(stack.length>0){
    const current=stack.pop()
    if(current.val===target)return true
    if(current.right)stack.push(current.right)
    if(current.left)stack.push(current.left)
  }
  return false
}
const resp2=depthFirstValueIncludes('j',a)
console.log(resp2)
