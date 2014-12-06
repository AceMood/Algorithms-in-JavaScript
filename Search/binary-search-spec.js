/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Binary Search Test', function() {

    it('down order', function() {

        var testArray = [2,3,42,7,11,5,12,96,23];

        var ret = binary_search(testArray, 100, 11);

        expect(ret).toBe(4);

    });

});