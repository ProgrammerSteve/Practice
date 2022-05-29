{/*
https://www.youtube.com/watch?v=l7-f9gS8VOs

[2 3 1 5]
sort in accending order
a nested for loop where j<i
if j<i is true, use a temp variable
then swap temp=i, i=j, j=temp


i   j
[2, 3, 1, 5]
since j>i, nothing happens

i      j
[2, 3, 1, 5]
since j<i we swap
[1, 3, 2, 5]


i         j
[1, 3, 2, 5]
since j>i, nothing happens


    i  j
[1, 3, 2, 5]
first iteration complete, j is i+1
so i moves to the next spot and j starts beside it
since j<i we swap

    i     j
[1, 2, 3, 5]
since j>i, nothing happens


       i  j
[1, 2, 3, 5]
next iteration begins,
since j>i, nothing happens


*/}

let arr=[2,3,1,5,7,8,2,1,6];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr);