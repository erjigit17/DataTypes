'use strict';

let a = undefined;

function fn(x) {
  return x + a;
}

a = 1;

module.exports = { fn };
