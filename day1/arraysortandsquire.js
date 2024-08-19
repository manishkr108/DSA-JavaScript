function sortedSquaredArray(array){
    const newArray = new Array(array.length).fill(0);

    let leftPoint = 0;
    let rightPoint = array.length -1;

    for(let i= array.length-1;i>=0;i--){
        let leftSqur = Math.pow(array[leftPoint],2);
        let rightSquare = Math.pow(array[rightPoint],2);
        if(leftSqur > rightSquare){
            newArray[i] = leftSqur;
            leftPoint++;
    }else{
        newArray[i] = rightSquare;
        rightPoint--;
    }
}
return newArray;
}

const arr = [-3,5,-6,9,1];
// const arr = [10];
console.log(sortedSquaredArray(arr));