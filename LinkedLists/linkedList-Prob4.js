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




//Time complexity: O(n)
//Space complexity: O(1)
const getNode=(head,index)=>{
    let count=0;
    let current=head;
    while(current!=null){
        if(count==index)return current.val;
        count+=1;
        current=current.next;
    }
    return null;
}
console.log(getNode(a,0))



///////////////////////////////////////////////////


//Time complexity: O(n)
//Space complexity: O(n)
const getRecursive=(head,index)=>{
    if(head==null)return null;
    if(index==0)return head.val;
    return getRecursive(head.next,index-1);
}

console.log(getRecursive(a,5))