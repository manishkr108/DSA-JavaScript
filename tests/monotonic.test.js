// const { sortedSquarredArray } = require('../day1/bigo.js');
const {checkArraymonotonix} =  require('../day1/momotonic.js')

describe('checkArraymonotonix',()=>{
    test('should return tru for an increasing array',()=>{
        expect(checkArraymonotonix([1,2,3,4,5])).toBe(true);
});

})