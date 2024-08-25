/*
todo => arr[1,3,2,5,4,9,6];
* write a function to square each value form array and return new array
*/


function squareArray(arr){
    if(arr.length ===0){
        return [];
    }
    arr.sort((a,b)=>a-b);
    const newArray = new Array(arr.length).fill(0);

    let leftPoint =0;
    let rightPoint = arr.length-1;
    let index = arr.length-1;

    while(leftPoint <= rightPoint){
        let leftSquare = Math.pow(arr[leftPoint],2);
        let rightSquare = Math.pow(arr[rightPoint],2);

        if(leftSquare > rightSquare){
            newArray[index] = leftSquare;
            leftPoint++;
        }else{
            newArray[index] = rightSquare;
            rightPoint--;
        }
        index--;
    }
    return newArray;
}

console.log(squareArray([2,7,9,1,3,4]));
