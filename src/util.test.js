var util = require('./util');
var feedbacks = require('../test/mock').feedbacks;

describe('compareByProperty', () => {
  const obj1 = {
    id: 11,
    title: 'a',
    dob: new Date('December 17, 1995 03:24:00')
  };
  const obj2 = {
    id: 35,
    title: 'A',
    dob: new Date('December 17, 1995 13:24:00')
  };
  const obj3 = {
    id: 200,
    title: 'z',
    dob: new Date('December 17, 1998 03:24:00')
  };

  test('strings', () => {
    const compareResult1 = util.compareByProperty('title', 'asc')(obj1, obj2);
    expect(compareResult1).toBe(0);
    const compareResult2 = util.compareByProperty('title', 'asc')(obj1, obj3);
    expect(compareResult2).toBe(-1);
    const compareResult3 = util.compareByProperty('title', 'desc')(obj2, obj3);
    expect(compareResult3).toBe(1);
  });

  test('number', () => {
    const compareResult1 = util.compareByProperty('id', 'asc')(obj1, obj2);
    expect(compareResult1).toBe(-1);
    const compareResult2 = util.compareByProperty('id', 'desc')(obj2, obj3);
    expect(compareResult2).toBe(1);
  });

  test('date', () => {
    const compareResult1 = util.compareByProperty('dob', 'asc')(obj1, obj2);
    expect(compareResult1).toBe(-1);
    const compareResult2 = util.compareByProperty('dob', 'desc')(obj2, obj3);
    expect(compareResult2).toBe(1);
  });
});

describe('paging', () => {
  test('normal paging', () => {
    expect(util.paging(feedbacks, 1, 1)).toHaveLength(1);
    expect(util.paging(feedbacks, 100, 1)).toHaveLength(0);
    expect(util.paging(feedbacks, 2, 2)).toHaveLength(2);
    expect(util.paging(feedbacks, 1, feedbacks.length + 5)).toHaveLength(
      feedbacks.length
    );
    expect(util.paging(feedbacks, 2, feedbacks.length - 1)).toHaveLength(1);
  });
});
