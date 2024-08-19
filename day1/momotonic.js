/*
todo= An Array is monotonic if it is either monotone increasig or monotone decreasing. An array is monotone increasing 
todo = if all its elements from left to right are non-decreasing .
todo= an array is monotone decresign if all its elements from left to right are non-increasign. given an integer array 
todo = array return ture if the given array is monotonic , or false otherwise.
* [1,2,3] this is monotonic increase [1,2,3,3] = this is monotonic non-decreasign
* [3,2,1] monotone decreasing 

! clarifying Questing
? is anempty array monotonic ? yes
? is an array with one element monotonic ? yes
*/

const checkArraymonotonix = function (array){
    if(array.length == 0){
        return true;
    }

    const first = array[0];
    const last = array[array.length - 1];
    if(first === last){
        for(let i=0;i<array.length-1;i++){
            if(array[i+1] !== array[i]) return false;
        }
    }else if(first < last){
        for(let i=0;i<array.length-1;i++){
            if(array[i+1] <array[i]) return false
        }
    }else{
        for(let i=0;i<array.length-1;i++){
            if(array[i+1] > array[i]) return false
    }
}
return true


}
const ar = [1,5,7];
console.log("monotonic",checkArraymonotonix(ar));
module.exports = { checkArraymonotonix };