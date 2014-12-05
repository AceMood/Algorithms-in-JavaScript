/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Bubble Sort Test', function() {

    it('up order', function() {

        var testArray = [2,3,42,7,11,5,12,96,23];

        var ret = bubbleSort(testArray, true);

        expect(ret).toEqual([2,3,5,7,11,12,23,42,96]);

    });


    it('down order', function() {

        var testArray = [2,3,42,7,11,5,12,96,23];

        var ret = bubbleSort(testArray, false);

        expect(ret).toEqual([96,42,23,12,11,7,5,3,2]);

    });

});