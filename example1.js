/*
todo= QUESTION1 = 
* write a function called same, which accept two array. the function should return if every value in the array has
* its corresponding value squared in the second array. the frequency of value must be the same.
*/
//! this is 1st solution 
function same(arr, arr1){
    if(arr.length !== arr1.length){
        return false;
    }
    for(let i = 0; i < arr.length; i++){
        let currectIndex = arr1.indexOf(arr[i]** 2)
        if(currectIndex === -1){
            return false;
    }
    console.log(arr1)
    arr1.splice(currectIndex,1)
    }
    return true;
}

same([1,2,3,2] ,[9,1,4,4])

//* this 2nd REFACTORED CODE

function sames(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        console.log(val+"\n");
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }

    for(let key of arr2){
        frequencyCounter2[key] = (frequencyCounter2[key] || 0) +1;
    }


    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
          return false;
        }
         if(frequencyCounter2[key **2] !== frequencyCounter1[key]){
          return false;
        }
    }
    return true;

}
sames([1,2,3,2] ,[9,1,4,4])