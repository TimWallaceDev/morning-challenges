
import { double, doubleBonus } from "./double";


// Test cases using Jest
describe('Double each letter of the word and spaces', () => {
    test('double all letters', () => {
        // Call your function and assert the result
        expect(double("JonesBones")).toEqual("JJoonneessBBoonneess");
    });

    test('double all letters and spaces', () => {
        // Call your function and assert the result
        expect(double("Jones Bones")).toEqual("JJoonneess  BBoonneess");
    });

    test('double all letters and spaces', () => {
        // Call your function and assert the result
        expect(double("oops")).toEqual("ooooppss");
    });

    // Add more test cases as needed
});


// Test cases using Jest
describe('Double each letter, unless already doubled', () => {
    test('double all letters', () => {
        // Call your function and assert the result
        expect(doubleBonus("Hello World")).toEqual("HHeelloo  WWoorrlldd");
    });

    test('double all letters', () => {
        // Call your function and assert the result
        expect(doubleBonus("oops")).toEqual("ooppss");
    });

    // Add more test cases as needed
});