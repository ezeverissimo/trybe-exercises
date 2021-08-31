const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected1 = sum(4, 5);
assert.strictEqual(expected1, 9, 'Soma invalida');

const expected2 = sum(0, 0)
assert.strictEqual(expected2, 0, 'Soma invalida')
