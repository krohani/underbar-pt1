const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects everything in an array if no callback provided', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    const orderItems = _.reject(nums);
    expect(orderItems).toEqual([]);
  });

  it('rejects objects with specific property values in an array of objects', () => {
    const people = [
      {name: "kirk", age: 29, blood_donor: true},
      {name: "joe", age: 21, blood_donor: false},
      {name: "marie", age: 39, blood_donor: true},
      {name: "cindy", age: 21, blood_donor: false},
      {name: "allison", age: 36, blood_donor: true}
    ];
    const blood_donors = _.reject(people, person => !person.blood_donor );
    expect(blood_donors).toEqual([{name: "kirk", age: 29, blood_donor: true},{name: "marie", age: 39, blood_donor: true},{name: "allison", age: 36, blood_donor: true}]);
  });

});