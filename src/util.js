function compare(property, object1, object2) {
  const value1 =
    typeof object1[property] === 'string'
      ? object1[property].toLowerCase()
      : object1[property];
  const value2 =
    typeof object2[property] === 'string'
      ? object2[property].toLowerCase()
      : object2[property];
  if (value1 < value2) return -1;
  if (value1 > value2) return 1;
  return 0;
}

function compareByProperty(property, order) {
  var orderRatio = order === 'desc' ? -1 : 1;
  return function(object1, object2) {
    return orderRatio * compare(property, object1, object2);
  };
}

function paging(array, page, take) {
  return array.slice((page - 1) * take, page * take);
}

module.exports = { compareByProperty, paging };
