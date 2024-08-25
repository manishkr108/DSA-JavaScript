/*
! ANAGRAM =  anagram('','') // true
! ANAGRAM =  anagram('aaz','zza') // false
! ANAGRAM =  anagram('qwerty','qewyrt') // false
* valuve is persend in secound integer not repited index not meter (both string value should be same )

* given two strings, write a function to de

*/

// function validAnagram(first,secound){
//     if(first.length !== secound.length){
//         return false;
//     }

//     const lookup = {};
//     for(let i =0;i<first.length;i++){
//         let letter = first[i];
//         console.log("first",letter)
        
//         lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
//         console.log("first",lookup[letter])
//         console.log("first",lookup)
//     }

//     for(let i=0;i<secound.length;i++){
//         let letter =secound[i];
//         console.log("second",letter);
//         if(!lookup[letter]){
//             return false;
//         }else{
//             lookup[letter] -=1
//         }
//     }

//     return true;
// }

// console.log(validAnagram("qqq","qqq"));

function chechAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }

    const lookupobj = {};

    for(let i=0;i<str1.length;i++){
        let letter = str1[i];

        lookupobj[letter] ? lookupobj[letter] +=1 : lookupobj[letter] = 1;
    }

    for(let i =0;i<str2.length;i++){
        let letter = str2[i];
        if(!lookupobj[letter]) return false;
    }
     return true;
}

module.exports ={chechAnagram};