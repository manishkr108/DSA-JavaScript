/*
!MULTIPLE POINTERS
* creating pointers or value that correspond to an index or position and move towards the beginning ,
* End or middle based on a certain condition, very efficient for solving problems with minimal space complexity as well
*/


function sumZero(arr) {

    if(arr.length===0){
        console.log("please pass a arry value");
            return false
    }

    arr.sort((a,b)=>a-b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    // Return undefined explicitly when no pair is found
    return undefined;
}

const arr = [-3, -2, 5, 6, 3, 2, -7, 40];

let result = sumZero(arr);

if (result === undefined) {
    console.log('No pair of elements sum to zero');
} else {
    console.log(result);
}
