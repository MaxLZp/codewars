const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Lazily executing a function', function () {

    function makeLazy (fn, ...args) {
        return function () {
            return fn(...args);
        };
    }

	function doTest(func, ...args) {
        const expected = func(...args);
		const log = `for arguments (${args})\nand function:\n${func.toString()}\n`;
		const thunk = makeLazy(func, ...args);
		assert.typeOf(thunk, 'function');
		const actual = thunk();
		assert.strictEqual(actual, expected, log);
	}

    it('should be lazy', () => {
        let called = false;
        function func() {
            called = true;
        }
        makeLazy(func);
        assert(!called, 'do not call the function in makeLazy()');
    });

	it("sample tests", () => {
		function add(a, b) { return a + b; }

		function double(n) { return n * 2; }

		function superAdd(...args) { return args.reduce((sum, x) => sum + x, 0); }

		doTest(add, 2, 3);
		doTest(double, 5);
		doTest(superAdd, 1, 2, 3, 4, 5);
	});

});
