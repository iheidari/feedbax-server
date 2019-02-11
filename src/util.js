function compare(property, object1, object2) {
  if (object1[property] < object2[property]) return -1;
  if (object1[property] > object2[property]) return 1;
  return 0;
}

function compareByProperty(property, order) {
  var orderRadio = order === 'desc' ? -1 : 1;
  return function(object1, object2) {
    return orderRadio * compare(property, object1, object2);
  };
}

function paging(array, page, take) {
  return array.slice((page - 1) * take, page * take);
}

module.exports = { compareByProperty, paging };
