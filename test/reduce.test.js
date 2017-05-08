const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to the initial value if no callback provided', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums);
    expect(result).toEqual(1);
  });


  it('flatten an array of arrays', () => {
    const nums = [[1], [2], [3], [4], [5]];
    const result = _.reduce(nums, (acc, curr) => acc.concat(curr));

    expect(result).toEqual([1,2,3,4,5]);
  });

  it('get the sum of a set of property values in an array of objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 92},
      { name: 'Bethany', age: 14}
    ];
    const result = _.reduce(people, (acc, curr) => {
     return acc + curr.age; 
    },0);

    expect(result).toEqual(118);
  });

  it('get the max (or min) or a specific property in an array of objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 92},
      { name: 'Bethany', age: 14}
    ];
    const result = _.reduce(people, (acc, curr) => {
     if (curr.age > acc.age) {
       return curr;
     } else {
      return acc;
     }
    });

    expect(result).toEqual({ name: 'Lazarus', age: 92});
  });

  it('count instances of something in an array of objects', () => {
    const people = [
      { name: 'Bob', age: 12},
      { name: 'Sally', age: 92},
      { name: 'Jenny', age: 14},
      { name: 'Bob', age: 12},
      { name: 'Jeff', age: 92},
      { name: 'Sally', age: 14}
    ];
    const result = _.reduce(people, (acc, curr) => {
     if (acc[curr.name]) {
       acc[curr.name]++;
     } else {
       acc[curr.name] = 1;
     }
     return acc;
    },{});

    const peopleCount = {
      "Bob": 2,
      "Sally": 2,
      "Jenny": 1,
      "Jeff": 1,
    }

    expect(result).toEqual(peopleCount);
  });


});