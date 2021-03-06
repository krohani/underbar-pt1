const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an actual EMPTY array', () => {
    expect(_.isArrayLike([])).toBe(true);
  });

  it('returns true for an actual EMPTY array-like object', () => {
    expect(_.isArrayLike({length: 0})).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns false for a negative length number', () => {
    const arrayLikeObj = {
      length: -5
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(false);
  });

  it('returns true for a arguments variable', () => {
    const dummyFunction = function() {
      expect(_.isArrayLike(arguments)).toBe(true);
    }
    
  });

});
