//  5/27/2022


class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

// Values: [A,B,C,D]
// Time complexity: O(n)
// Space complexity: O(n)

a=new Node('A')
b=new Node('B')
c=new Node('C')
d=new Node('D')

a.next=b;
b.next=c;
c.next=d;

linkedListValues=(head)=>{
    let values=[];
    let current= head;
    while(current!=null){
        values.push(current.val);
        current=current.next;
    }
    return values;
}
console.log(linkedListValues(a));
/////////////////////////////////////////////

const linkedListRecursive=(head)=>{
    const values=[];
    fillValues(head,values);
    return values;
}
const fillValues=(head,values)=>{
    if(head==null)return;
    values.push(head.val);
    fillValues(head.next,values);
}
console.log(linkedListRecursive(a));
