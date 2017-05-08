const _ = require('../underbar');

describe('pluck()', () => {

  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of undefined if pluck not given key to pluck on', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people);
    expect(result).toEqual([undefined, undefined, undefined]);
  });

  it('returns back original array if an array of non-objects is passed in', () => {
    const people = ["a", "b", "c", "d"];
    const result = _.pluck(people, 0);
    expect(result).toEqual(people);
  });
  
  
  it('returns array of undefined values if key does not exist in objects in array', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, "height");
    expect(result).toEqual([undefined, undefined, undefined]);
  });

});