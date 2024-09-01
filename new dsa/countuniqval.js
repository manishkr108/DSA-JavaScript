/*
!COUNT UNIQUE VALUES
* Implement a function called countUniqueValues,which accepts a sorted array and counts the unique value in the array
* there can be negative numbers in tye array . but it will always be sorted.

*/

function countUniqueValue(arr){
    if(arr.length == 0){
         return false;
    }
        

    var i = 0;
    for(let j =1;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i +1;

    
}

const arr= [9,1,2,3,4,8,5,5,6,6,7,7,7];
console.log(countUniqueValue(arr)); 