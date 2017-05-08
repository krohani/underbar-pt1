const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns undefined if given an empty array and no number', () => {
    expect(_.last([])).toBeUndefined();
  });

  it('returns an empty array if given an empty array and a number', () => {
    expect(_.last([], 2)).toEqual([]);
  });


  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the an empty array if you ask for a negative number of elements', () => {
    expect(_.last(['a', 'b', 'c'], -5)).toEqual([]);
  });

  it('returns an empty array  if you ask for zero elemwents', () => {
    expect(_.last(['a', 'b', 'c'], 0)).toEqual([]);
  });

});