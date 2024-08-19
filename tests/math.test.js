// math.test.js
const { sortedSquarredArray } = require('../day1/bigo.js');

test('sorts and squares an array of positive numbers', () => {
    const input = [4, 1, 3, 5, 7];
    const expectedOutput = [1, 9, 16, 25, 49];
    const actualOutput = sortedSquarredArray(input);
    
    console.log('Input:', input);
    console.log('Expected Output:', expectedOutput);
    console.log('Actual Output:', actualOutput);

    expect(actualOutput).toEqual(expectedOutput);
});

test('sorts and squares an array with negative numbers', () => {
    const input = [-3, -1, 0, 2, 4];
    const expectedOutput = [0, 1, 4, 9, 16];
    const actualOutput = sortedSquarredArray(input);
    
    console.log('Input:', input);
    console.log('Expected Output:', expectedOutput);
    console.log('Actual Output:', actualOutput);

    expect(actualOutput).toEqual(expectedOutput);
});

test('handles an empty array', () => {
    const input = [];
    const expectedOutput = [];
    const actualOutput = sortedSquarredArray(input);
    
    console.log('Input:', input);
    console.log('Expected Output:', expectedOutput);
    console.log('Actual Output:', actualOutput);

    expect(actualOutput).toEqual(expectedOutput);
});

test('sorts and squares an array with duplicates', () => {
    const input = [2, 1, 2];
    const expectedOutput = [1, 4, 4];
    const actualOutput = sortedSquarredArray(input);
    
    // console.log('Input:', input);
    // console.log('Expected Output:', expectedOutput);
    // console.log('Actual Output:', actualOutput);

    expect(actualOutput).toEqual(expectedOutput);
});
