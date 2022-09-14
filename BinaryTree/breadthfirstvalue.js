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

// breadth first transversal
// values: a,b,c,d,e,f
// at each level, you go from left to right getting values
// uses the queue data structure
// things enter the back of the queue and leave at the front
//        1a
//       /  \
//      2b  3c
//     / \    \
//   4d   5e   6f

/*
place 'a' into the queue to begin
queue: a

  'a' comes out of the queue and set to current
  look at 'a's children and add them to the queue,
  'b' enters first and then 'c' going from left to right
  queue: c,b

  'b' comes out of the queue and set to the current
  look at 'b's children and add them to the queue,
  'd' enters first and then 'e' going from left to right
  queue: e,d,c

  'c' comes out of the queue and set to the current
  look at 'c's children and add them to the queue,
  enter 'f' to the queue as the only child
  queue: f,e,d

  'd' comes out of the queue and set to the current
  look at 'd's children and there are none,
  queue: f,e

  'e' comes out of the queue and set to the current
  look at 'e's children and there are none,
  queue: f

  'f' comes out of the queue and set to the current
  look at 'f's children and there are none,
  queue: 

queue is empty and algorithm is finished

time complexity: O(n)
every node is visited once
space complexity: O(n)
every node is visited once
*/

//iterative solution
const breadthFirstValue=(root)=>{
  if(root===null)return []
  const queue=[root]
  const values=[]
  while(queue.length>0){
    const current=queue.shift()
    values.push(current.val)
    if(current.left)queue.push(current.left)
    if(current.right)queue.push(current.right)
  }
  return(values)
}
const resp=breadthFirstValue(a)
console.log(resp)


