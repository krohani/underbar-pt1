_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every numbers in an object of number values to their half', () => {
    const obj = {
      "number1":  1,
      "numebr2": 2,
      "number3": 3,
      "number4": 4
    };

    const mappedArr = _.map(obj, (el) => el / 2);
    expect(mappedArr).toEqual([.5,1,1.5,2]);
  });

  it('reformats objects in an array', () => {
    const arr = [
      {"age": 12},
      {"age": 24},
      {"age": 36},
      {"age": 48}
    ];

    const mappedArr = _.map(arr, (obj) => {
      if (obj.age < 18) {
        return {"age": "just a baby"};
      } else if (obj.age < 25) {
        return {"age": "teenager"};
      } else if (obj.age < 40) {
        return {"age": "mature adult"};
      } else if (obj.age < 70) {
        return {"age": "senior citizen"};
      } else {
        return {"age": "retirement time"};
      }
    });

    const newArr = [
      {"age": "just a baby"},
      {"age": "teenager"},
      {"age": "mature adult"},
      {"age": "senior citizen"}
    ];

    expect(mappedArr).toEqual(newArr);
  });

});