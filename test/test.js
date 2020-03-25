const { performance } = require('perf_hooks');
const assert = require('assert');
const { isBinarySearchTree } = require('../src/index');
const { first, second, third } = require('./trees');
describe('magicSquare', function() {
  it('Test case First should return false', function() {
    let time = performance.now();
    const result = isBinarySearchTree(first);
    console.log(performance.now() - time);
    assert.equal(result, false)
  });
  it('Test case Second should return true', function() {
    let time = performance.now();
    const result = isBinarySearchTree(second);
    console.log(performance.now() - time);
    assert.equal(result, true)
  });
  it('Test case Third should return false', function() {
    let time = performance.now();
    const result = isBinarySearchTree(third);
    console.log(performance.now() - time);
    assert.equal(result, false)
  });
});
