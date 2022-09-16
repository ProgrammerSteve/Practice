/*
  a → c
  ↓   ↓
  b   e
  ↓
  d → f

  Note: values printed in the function will vary depending on how the Adjacency List/ Neighbor List is set up
*/
const graph={
  a:['b','c'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}

const depthFirstPrint=(graph,source)=>{
  const stack=[source];
  while(stack.length>0){
    const current=stack.pop();
    console.log(current);
    for(let neightbor of graph[current]){
      stack.push(neightbor)
    }
  }
}
depthFirstPrint(graph,'a')


const depthFirstPrintRecursive=(graph,source)=>{
  console.log(source)
  for(let neighbor of graph[source]){
    depthFirstPrint(graph,neighbor)
  }
}
depthFirstPrintRecursive(graph,'a')