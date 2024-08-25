function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i=0;i<arr1.length;i++){
        let currectIndex = arr2.indexOf(arr1[i] ** 2);

        if(currectIndex === -1){
            return false;
        }

        arr2.splice(currectIndex,1)
    }
    return true;
}

console.log(same([1,2,3,4],[9,4,1,16,1]));
