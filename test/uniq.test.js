const _ = require('../underbar');

describe('uniq()', () => {

  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('returns back an empty array if passed in an empty array', () => {
    const nums = [];
    expect(_.uniq(nums)).toEqual([]);
  });

  it('returns back an empty array if passed in an empty object', () => {
    const nums = {};
    expect(_.uniq(nums)).toEqual([]);
  });

  it('returns back an array of unique property values given and object', () => {
    const nums = {
      first: 1,
      second: 12,
      third: 1,
      fourth: 'kirk',
      fifth: 'wendel',
      sixth: true,
      seventh: 'kirk'
    };
    expect(_.uniq(nums)).toEqual([1,12, 'kirk', 'wendel', true]);
  });

  it('returns back an array of the first object in an array of objects because (item in object) returns true since it cannot compare the specific object', () => {
    const people = [
      {name: 'kirk'},
      {name: 'joe'},
      {name: 'andrea'},
      {name: 'jade'},
      {name: 'kirk'},
      {name: 'joe'},
      {name: 'andrea'},
    ];

    const uniqPeople = [
      {name: 'kirk'},
      {name: 'joe'},
      {name: 'andrea'},
      {name: 'jade'}
    ];

    expect(_.uniq(people)).not.toEqual(uniqPeople);
  });

});