const {chechAnagram} =require("../new dsa/anagram");

test('return true for "cinema" and "icinema" ', ()=>{
    expect(chechAnagram("cinema","iceman")).toBe(true);
});

test('return true for "rat" and "cat" ', ()=>{
    expect(chechAnagram("rat","cat")).toBe(false);
});

test('return true for "tom" and "mot" ', ()=>{
    expect(chechAnagram("tom","mot")).toBe(true);
});

