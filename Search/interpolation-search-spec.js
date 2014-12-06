/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Interpolation Search Test', function() {

    it('test', function() {

        var testArray = [2,3,42,7,11,5,12,96,23];

        var ret = interpolation_search(testArray, 100, 11);

        expect(ret).toBe(4);

    });

});