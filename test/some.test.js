const _ = require('../underbar');

describe('some()', () => {

  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if no callback provided', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums)).toBe(true);
  });

  it('returns true if object has a property value matching predicate test', () => {
    const person = {
      name: 'kirk',
      age: 35,
      city: 'San Francisco',
      state: 'California',
      blood_donor: true
    };
    expect(_.some(person, person_data => person_data === 'San Francisco')).toBe(true);
  });

  it('returns false if object has a property value NOT matching predicate test', () => {
    const person = {
      name: 'kirk',
      age: 35,
      city: 'San Francisco',
      state: 'California',
      blood_donor: true
    };
    expect(_.some(person, person_data => person_data === 'Dallas')).toBe(false);
  });

  it('returns true if array of objects has at least 1 object matching predicate test', () => {
    const people = [
      {name: 'kirk', age: 64, hair_color: 'black', sex: 'm'},
      {name: 'christene', age: 24, hair_color: 'blonde', sex: 'f'},
      {name: 'angela', age: 33, hair_color: 'red', sex: 'f'},
      {name: 'mikey', age: 19, hair_color: 'blonde', sex: 'm'},
      {name: 'juan', age: 12, hair_color: 'brown', sex: 'm'},
    ];
    expect(_.some(people, person => person.hair_color === 'black')).toBe(true);
  });

  it('returns false if array of objects does NOT have at least 1 object matching predicate test', () => {
    const people = [
      {name: 'kirk', age: 64, hair_color: 'black', sex: 'm'},
      {name: 'christene', age: 24, hair_color: 'blonde', sex: 'f'},
      {name: 'angela', age: 33, hair_color: 'red', sex: 'f'},
      {name: 'mikey', age: 19, hair_color: 'blonde', sex: 'm'},
      {name: 'juan', age: 12, hair_color: 'brown', sex: 'm'},
    ];
    expect(_.some(people, person => person.hair_color === 'auburn')).toBe(false);
  });

});