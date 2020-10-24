'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const element of array) {
    const type = typeof element;
    const num = types[type] || 0;
    types[type] = num + 1;
  }
  return types;
};
module.exports = { countTypesInArray };
