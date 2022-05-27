
// Tutorial I am following:
//  https://www.youtube.com/watch?v=Hj_rA0dhr2I

{/*
5/27/2022:
First node in a linked list is called a head
Last node in a linked list is called a tail
Using the next pointer, you can access the next node in the list
Is an ordered data structure.

The difference between a linked list and an array is that an array
must be stored contiguously in memory. All the elements in an array are going
to be stored like right next to each other in your computer's memory.

To insert a node at a postion in a linked list, you need to reset the pointer
of the node at the position before to point at the new node. 
The number of operations 

Unlike, an array, you don't have to modify every node for an insertion.
linked list O(1) insertion
array O(n) insertion

if you want to pass a linked list to a function, you only need to pass
a reference to the head node to access


For a transveral operation:
you set current to current.next until it reaches Null
*/}

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next=b;// a's next property is pointing to b
b.next=c;
c.next=d;

// d is pointing to Null by default

//A->B->C->D->Null,  A is the head




const printLinkedList=(head)=>{
    let current=head;
    while(current!=null){
        console.log(current.val);
        current=current.next;
    }
}
printLinkedList(a); // use the head node as the input


//Recursive logic for transerval operation on a linked list
const printLinkedListRecursive=(head)=>{
    if(head==null)return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
}
printLinkedListRecursive(a);

























