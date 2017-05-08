const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns undefined if given empty array and no number', () => {
    expect(_.first([])).toBeUndefined();
  });

  it('returns empty array if given empty array and a number', () => {
    expect(_.first([], 2)).toEqual([]);
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns empty array if requesting zero elements ', () => {
    expect(_.first(['a', 'b', 'c'], 0)).toEqual([]);
  });

  it('returns array of elements from array length minute negative n', () => {
    expect(_.first(['a', 'b', 'c'], -1)).toEqual(['a', 'b']);
  });
});