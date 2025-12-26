const test = require("node:test");
const assert = require("node:assert/strict");
const { add, isPrime } = require("../calc");

test("add works", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test("isPrime works", () => {
  assert.equal(isPrime(1), false);
  assert.equal(isPrime(2), true);
  assert.equal(isPrime(3), true);
  assert.equal(isPrime(4), false);
  assert.equal(isPrime(29), true);
  assert.equal(isPrime(30), false);
});
