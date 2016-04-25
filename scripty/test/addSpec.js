const add = require('..');
const assert = require('chai').assert;

describe('Add', function() {
    it('should add two numbers correctly', function() {
        assert.equal(add(1, 2), 3);
    });
});
