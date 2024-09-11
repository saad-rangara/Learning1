import { test, expect, describe } from "vitest";
import { add, subtract, multiplication, divide, isPalindrome } from "./challenges";

test("add", function(){
    const result = add(3, 7);
    const expected = 10;

    expect(result).toBe(expected);
});

test("subtract", function() {
    const result = subtract(5, 1);
    const expected = 4;

    expect(result).toBe(expected);
});

test("multiplication", function() {
    const result = multiplication(11, 11);
    const expected = 121;
    expect(result).toBe(expected);
})

test("divide", function() {
    const result = divide(11, 11);
    const expected = 1;
    expect(result).toBe(expected);
})

// Describe (from vitest) allows us to group tests for similar functionality under the same heading
describe("isPalindrome", () => {
test("returns true for palindromic strings", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
});

test("returns false for non-palindromic strings", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("not a palindrome")).toBe(false);
});
});