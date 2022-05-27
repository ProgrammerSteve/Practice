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
const checkList=(head,val)=>{
    let current=head;
    let output=false;
    while(current!=null){
        if(current.val==val){
            output=true;
            break;
        }
        current=current.next;
    }
    return output;
}
console.log(checkList(a,'G'));