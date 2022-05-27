// 5/27/2022

//Sum these numbers in a linked list
// 2->8->3->7

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

a=new Node(2);
b=new Node(8);
c=new Node(3);
d=new Node(7);
a.next=b;
b.next=c;
c.next=d;



// Time complexity: O(n)
// Space complexity: O(1)
const sumLinkedList=(head)=>{
    let current=head;
    let sum=0;
    while(current!=null){
        sum+=current.val;
        current=current.next;
    }
    return sum;
}
console.log(sumLinkedList(a));


///////////////////////////////////////////////


// Time complexity: O(n)
// Space complexity: O(n)
const sumList=(head)=>{
    if(head==null) return 0;
    return head.val + sumList(head.next)
}
console.log(sumList(a));
