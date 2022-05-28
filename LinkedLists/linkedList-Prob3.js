// 5/27/2022
//check if a value is contained in a linked list
// A->B->C->D, check if C is included and return true or false

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

a=new Node('A');
b=new Node('B');
c=new Node('C');
d=new Node('D');
a.next=b;
b.next=c;
c.next=d;

//time complexity: O(n)
//Space complexity: O(1)
const checkList=(head,target)=>{
    let current=head;
    while(current!=null){
        if(current.val==target){
            return true;
        }
        current=current.next;
    }
    return false;
}
console.log(checkList(a,'C'));


///////////////////////////////////


//time complexity: O(n)
//Space complexity: O(n)
const checkRecursive=(head,target)=>{
    if(head===null) return false;
    if(head.val===target) return true;
    return checkRecursive(head.next,target);
}
console.log(checkRecursive(a,'C'));