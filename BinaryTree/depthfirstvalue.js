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

// depth first transversal
// values: a,b,d,e,c,f
// go from a to b to f, once you can't go any further, go laterally to e
// since you can't go any further, go laterally to c and then finish at f
//
//        1a
//      /   \
//     2b     5c
//    / \     \
//   3f   4e     6f
//
// you can use a data structure like a stack to transverse it
// a stack is a data structure where you can only add things to the top of the stack,
// and remove things from the top of the stack
/*

push root node into stack
stack: a

check is stack is empty: it is not since there's the 'a'
remove 'a' node and make it the current node, add to values
looking at the current node's children we see it has the b and c node
we will push the b and c node
we push c first and then b afterwards, the right node get pushed then the left
stack: c b

check is stack is empty: it is not since there's the 'c' and 'b'
remove 'b' node and make it the current node, add to values
looking at the current node's children we see it has the d and e node
we will push the d and e node
we push e first and then d afterwards, the right node get pushed then the left
stack: c e d

check is stack is empty: it is not since there's the 'c' 'e' and 'd'
remove 'd' node and make it the current node, add to values
looking at the current node's children we it has no children
stack: c e

check is stack is empty: it is not since there's the 'c' and 'e'
remove 'e' node and make it the current node, add to values
looking at the current node's children we it has no children
stack: c 

check is stack is empty: it is not since there's the 'c'
remove 'c' node and make it the current node, add to values
looking at the current node's children we see it has the f node
we will push the f node
stack: f

check is stack is empty: it is not since there's the 'f'
remove 'f' node and make it the current node, add to values
looking at the current node's children we it has no children
stack: 

check if the stack is empty: it is and we are done
values: a,b,d,e,c,f


letting n= # of nodes
Time complexity is O(n)
since we aren't double visiting any nodes
space complexity is O(n)
*/

const depthFirstValues=(root)=>{
  if(root===null) return [];
  const result=[];
  const stack=[root];
  //.push to add to top
  //.pop to remove from top

  while(stack.length>0){
    const current=stack.pop();
    result.push(current.val);
    // console.log(current.val);

    //check if children exist and push
    //switching the position, will make it favor the right side instead
    if(current.right)stack.push(current.right);
    if(current.left)stack.push(current.left);
  }
  return result
}
const answer=depthFirstValues(a)
console.log('Iterative Method: ',answer)


//recursive answer
const depthFirstValues2=(root)=>{
  if(root===null) return [];
  const leftValues=depthFirstValues2(root.left);
  const rightValues=depthFirstValues2(root.right);
  return [root.val, ...leftValues, ...rightValues]
}
const answer2=depthFirstValues2(a)
console.log('Recursive Method: ',answer2)