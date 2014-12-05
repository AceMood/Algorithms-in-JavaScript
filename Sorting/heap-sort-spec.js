/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Heap Sort Test', function() {

    it('down order', function() {

        var testArray = [2,3,42,7,11,5,12,96,23];

        var ret = heapSort(testArray, false);

        expect(ret).toEqual([96,42,23,12,11,7,5,3,2]);

    });

});