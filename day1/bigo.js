/*
todo =>  you are given an array of integere each subsequent value is not less then the previous value.
todo => write a function that takes this array as an input and returns a new array with the squares of each number 
todo => sorted in assending order

! clarifung questiongs
* are all number positive => no, can be -ve or 0 also
* are the integers distinct => no necessary
* can an empty array of integers be given as input => yes , return empty array in this case

!TEST CASE
* input: [-5, -4, -3, -2, -1, 0] =>  =>[0,1,4,9,16,25]
* input: [1, 2, 3, 4, 5] => [1,4,9,16,25]
* input [0,5,6] => [0,25,36]
todo [SOLUTION Method 1] => brute force method
* =>squired each element [-3,1,2,7] => [1,4,9,49 ] O(n)

*/
// math.js
// function sortedSquarredArray(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray[i] = array[i] ** 2;
//     }
//     newArray.sort((a, b) => a - b);
//     return newArray;
// }
// // const input = [4, 1, 3, 5, 7];
// // console.log(sortedSquarredArray(input));
// module.exports = { sortedSquarredArray };

// * secound approch

function sortedSquarredArray(array){
    array.sort((a, b) => a - b);
    const newArray =  new Array(array.length).fill(0);
    let pointerLeft =0;
    let pointerRight = array.length -1;
    for(let i=array.length -1; i>=0;i--){
        const leftSquir = Math.pow(array[pointerLeft],2);
        const rightSquire = Math.pow(array[pointerRight],2)
        if(leftSquir > rightSquire){
            newArray[i] = leftSquir;
            /* `pointerLeft` is used to keep track of the current position from the left end of the
            sorted array. It is incremented when the squared value of the element at the left
            pointer is greater than the squared value of the element at the right pointer. */
            pointerLeft++;
        }else{
            newArray[i] = rightSquire;
            pointerRight--;
        }
    }
    return newArray;
}
// let Input= [ -3, -1, 0, 2, 4 ];
let Input = [1,4,3,9,5]
console.log(sortedSquarredArray(Input))
module.exports = { sortedSquarredArray };

/*
todo=>  Function Declaration: This declares a function named sortedSquarredArray that takes one argument, array, which is an array of integers.
* const newArray =  new Array(array.length).fill(0);
*Create a New Array: A new array newArray is created with the same length as the input array. 
*All elements in newArray are initialized to 0 using the .fill(0) method. This array will be used to store the squared values in sorted order.
*let pointerLeft = 0;
*let pointerRight = array.length - 1;
*Initialize Two Pointers: pointerLeft is initialized to the start of the array (0 index), and pointerRight is initialized to the end of the array (array.length - 1 index). These pointers will be used to traverse the array from both ends.
*for(let i = array.length - 1; i >= 0; i--) {
*Reverse Loop: This for loop starts from the end of the newArray (at index array.length - 1) and iterates backwards to the start (until i reaches 0). This is because the largest squared value is inserted first in the newArray.
*/



