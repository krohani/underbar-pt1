const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
  });

  describe('processing of object values', () => {

    it('will return true if all values in an object are strings', () => {
      const students = {
        "student1": "Kirk",
        "student2": "Chris",
        "student3": "Jobe"
      };
      expect(_.every(students, name => typeof name === "string")).toBe(true);
    });

    it('will return false if all values in an object are not strings', () => {
      const students = {
        "student1": "Kirk",
        "student2": 42,
        "student3": "Jobe"
      };
      expect(_.every(students, name => typeof name === "string")).toBe(false);
    });

    it('will return true if no callback passed and an object is passed in', () => {
      const students = {
        "student1": "Kirk",
        "student2": 42,
        "student3": "Jobe"
      };
      expect(_.every(students)).toBe(true);
    });

  });
});