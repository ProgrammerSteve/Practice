// 5/27/2022
//Zipper list problem
//two list A->B->C   Q->R->S
//alternate between nodes of list 1 and list 2
//startign with list 1.  A->Q->B->R->C->S
//if one list is longer than the other, continue on
//with the remaining nodes of the longer list

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}


//test case 1
// let a= new Node('A');
// let b= new Node('B');
// let c= new Node('C');
// a.next=b; b.next=c;

// let q= new Node('Q');
// let r= new Node('R');
// let s= new Node('S');
// q.next=r; r.next=s;





//test case 2
// A->Q->B->R->C->D->E->F
let a= new Node('A');
let b= new Node('B');
let c= new Node('C');
let d= new Node('D');
let e= new Node('E');
let f= new Node('F');
a.next=b; b.next=c;
c.next=d; d.next=e;

let q= new Node('Q');
let r= new Node('R');
q.next=r; 

//using even, odd to determine when to pull
//from list 1 and list 2

//time complexity= O(min(n,m))
//space complexity=O(1)
const zipList=(head1,head2)=>{
    let tail= head1;
    let current1=head1.next;
    let current2=head2;
    let count=0;
    while(current1!=null && current2!=null){
        if(count%2==0){
            tail.next=current2;
            current2=current2.next;
        }else{
            tail.next=current1;
            current1=current1.next;
        }
        tail=tail.next;
        count+=1;
    }
    if(current1!=null)tail.next=current1;
    if(current2!=null)tail.next=current2;
    return head1;
}



//used to log out the values
linkedListValues=(head)=>{
    let values=[];
    let current= head;
    while(current!=null){
        values.push(current.val);
        current=current.next;
    }
    return values;
}


// let headVal=zipList(a,q);
// console.log(linkedListValues(headVal));

////////////////////////////////////////////////////////////////////////////


const zipperRecursive=(head1,head2)=>{
    if(head1==null && head2==null) return null;
    if(head1==null) return head2;
    if(head2==null) return head1;

    let next1=head1.next;
    let next2=head2.next;

    head1.next=head2;
    head2.next = zipperRecursive(next2,next1);
    return head1;
}

let headVal2=zipperRecursive(a,q);
console.log(linkedListValues(headVal2));