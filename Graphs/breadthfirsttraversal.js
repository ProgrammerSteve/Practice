/*
  a → c
  ↓   ↓
  b   e
  ↓
  d → f

  Note: values printed in the function will vary depending on how the Adjacency List/ Neighbor List is set up
  only solved iteratively
*/
const graph={
  a:['b','c'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}

const breadthFirstPrint=(graph,source)=>{
  const queue=[source]
  while(queue.length>0){
    const current=queue.shift()
    console.log(current)
    for(let neighbor of graph[current]){
      queue.push(neighbor)
    }
  }
}

breadthFirstPrint(graph,'a')