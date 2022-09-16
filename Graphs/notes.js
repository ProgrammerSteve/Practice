/*
  f → g → h
  ↓ ↗
  i ← j
  ↓
  k

     a
   ↙  ↖
  b  →  c

🟦🟧🟦🟦🟧🟦
🟧🟧🟦🟦🟧🟦
🟦🟧🟦🟦🟦🟦
🟦🟦🟦🟧🟧🟦
🟦🟦🟦🟧🟧🟦
🟦🟦🟦🟦🟦🟦 

▢--▢--◼--▢--▢--▢
|   |  |   |  |   |
▢--◼--◼--◼--▢--▢
|   |  |   |  |   |
◼--◼--◼--◼--◼--▢
|   |  |   |  |   |
▢--◼--◼--◼--▢--▢
|   |  |   |  |   |
▢--▢--◼--▢--▢--▢
|   |  |   |  |   |
▢--▢--▢--▢--▢--▢


A graph is a collection of nodes and edges, edges being the connections between the nodes.
Node can also be called a vertex.

Directed graph (has arrow heads on the edges)
  a → c
  ↓   ↓
  b   e
  ↓
  d → f

Undirected graph (no arrow heads on the edges)
These nodes are two-way streets
  a - c
  |   |
  b   e
  |
  d - f

nodes next to eachother are called neighbor nodes

In code you can represent the relations between nodes with an adjacency list. 
You usually use a hashmap data structure for the adjacency list.

    Graph     Adjacency List
    a → c     {
    ↓   ↓       a: [b,c],
    b ← e       b: [d],
    ↓           c: [e],
    d → f       d: [],
                e: [b],
                f: [d]
              }

The keys in the adjacency list will be the nodes, you then list out all the outgoing edges for the node
Hence why for node e, it only lists b due to the outgoing edge pointing to b.

*Depth First Trasversal
a will be our starting point, we can go to b or c next
going to b, we can go to d
we bottomed out and can't go anywhere
going back to c, we can go to e
from e we can go to b and then d

*Breadth First Trasversal
a will be our starting point, we choose b
we must go to c, the other neighbor of a


depth first versus breadth first:

depth first:
pick a direction and travel in that direction as far as possible:
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--◼--▢--▢--▢    ▢--▢--◼--◼--◼--◼    ▢--▢--◼--◼--◼--◼    ▢--▢--◼--◼--◼--◼
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--◼    ▢--▢--▢--▢--▢--◼
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--◼    ▢--▢--▢--▢--▢--◼
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--◼    ◼--◼--◼--◼--◼--◼


breadth first:
Travels in all directions evenly, instead of favoring one direction all the way through:
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--◼--▢--▢--▢    ▢--◼--◼--◼--▢--▢
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--◼--▢--▢--▢    ▢--◼--◼--◼--▢--▢    ◼--◼--◼--◼--◼--▢
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--◼--▢--▢--▢    ▢--◼--◼--◼--▢--▢    ◼--◼--◼--◼--◼--▢    ◼--◼--◼--◼--◼--◼
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--◼--▢--▢--▢    ▢--◼--◼--◼--▢--▢    ◼--◼--◼--◼--◼--▢
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--◼--▢--▢--▢    ▢--◼--◼--◼--▢--▢
|   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |    |   |  |   |  |   |
▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--▢--▢--▢--▢    ▢--▢--◼--▢--▢--▢

Like a binary tree, for graphs:
* A depth first traversal uses a stack data structure
* A breadth first trasversal uses a queue data structure


Psuedo-code for Depth First Trasversal:
  a → c
  ↓   ↓
  b   e
  ↓
  d → f
 
  Choose a as your arbitrary starting node
  stack: [a]

  check if stack is empty
  pop off a from the stack
  a will become the current node
  *********************************
  consider a's neighbors [c,b]
  push c to the stack
  push b to the stack
  stack: [c,b]

  check if stack is empty
  pop off b from the stack
  b will become the current node
  *********************************
  consider b's neighbors [d]
  push d to the stack
  stack: [c,d]

  check if stack is empty
  pop off d from the stack
  d will become the current node
  *********************************
  consider d's neighbors [f]
  push f to the stack
  stack: [c,f]

  check if stack is empty
  pop off f from the stack
  f will become the current node
  *********************************
  consider f's neighbors []
  push nothing to the stack
  stack: [c]

  check if stack is empty
  pop off c from the stack
  c will become the current node
  *********************************
  consider c's neighbors [e]
  push e to the stack
  stack: [e]

  check if stack is empty
  pop off e from the stack
  e will become the current node
  *********************************
  consider e's neighbors []
  push nothing to the stack
  stack: []

  check if stack is empty
  stack is empty
  algorithm is complete




Psuedo-code for Breadth First Trasversal:
  a → c
  ↓   ↓
  b   e
  ↓
  d → f

  Choose a as your arbitrary starting node
  queue: [a]

  check if queue is empty
  shift off a from the queue
  a will become the current node
  *********************************
  consider a's neighbors [c,b]
  push c to the queue
  push b to the queue
  queue: [c,b]

  check if queue is empty
  shift off c from the queue
  c will become the current node
  *********************************
  consider c's neighbors [e]
  push e to the queue
  queue: [b,e]

  check if queue is empty
  shift off b from the queue
  b will become the current node
  *********************************
  consider b's neighbors [d]
  push d to the queue
  queue: [e,d]

  check if queue is empty
  shift off e from the queue
  e will become the current node
  *********************************
  consider e's neighbors []
  push nothing to the queue
  queue: [d]  

  check if queue is empty
  shift off d from the queue
  d will become the current node
  *********************************
  consider d's neighbors [f]
  push f to the queue
  queue: [f]    

  check if queue is empty
  shift off f from the queue
  f will become the current node
  *********************************
  consider f's neighbors []
  push nothing to the queue
  queue: []    

  check if queue is empty
  queue is empty
  algorithm is complete


*/