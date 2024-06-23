
import { longestSubarray } from "./longestSubarray";


// Test cases using Jest
describe('Handle all testcases', () => {
    test('Testcase 1', () => {
        // Call your function and assert the result
        expect(longestSubarray([8,2,4,7], 4)).toBe(2);
    });

    test('Testcase 2', () => {
        expect(longestSubarray([10,1,2,4,7,2], 5)).toBe(4);
    });

    test('Testcase 3', () => {
        expect(longestSubarray([4,2,2,2,4,4,2,2], 0)).toEqual(3);
    });
    
    test('Testcase 4', () => {
        expect(longestSubarray([9,10,1,7,9,3,9,9], 7)).toEqual(5);
    });

    // Add more test cases as needed
});
