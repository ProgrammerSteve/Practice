//reversing the order of a linked list
// A->B->C->D
// D->C->B->A

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let a= new Node('A');
let b= new Node('B');
let c= new Node('C');
let d= new Node('D');
a.next=b; b.next=c; c.next=d;

//time complexity=O(n)
//Space complexity=O(1)

// a placeholder is needed to hold the next value 
// while setting the next for current
// prev becomes the new head, while the head becomes the tail
// so prev is returned upon completion


const reverseList=(head)=>{
    let current=head;
    let prev=null;
    while(current!=null){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev;
}
console.log(reverseList(a));


////////////////////////////////////////////////////////////////


const reverseRecursive=(head, prev=null)=>{
    if(head==null)return prev;
    let next=head.next;
    head.next=prev;
    return reverseRecursive(next,head)
}
console.log(reverseRecursive(a));