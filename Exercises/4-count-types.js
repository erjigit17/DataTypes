'use strict';

const countTypesInArray = (arr) => {
  const types = {};
  for ( const item of arr ) {
    const type = typeof item;
    type in types ? types[type]++ : types[type] = 1
  };
  return types;
};

module.exports = { countTypesInArray };
