function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let counter1={};
    let counter2 = {};
   

    for(let val of arr1){

         counter1[val] = (counter1[val] || 0) +1;
   
    }

    for(let key in counter1){
        if(!(key ** 2 in counter2)){
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]){
            return false;
        }
    }
    return true;
}

console.log(same([1,2,2,4],[1,4,3,4]));