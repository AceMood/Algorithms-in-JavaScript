/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Common Longest String Test', function() {

    it('zero length', function() {
        var ret = lcs('', 'adbbcc');
        expect(ret).toBe('');
    });


    it('five length', function() {
        var ret = lcs('abbcc', 'dbbcc');
        expect(ret).toBe('bbcc');
    });


    /*
    it('more than 10 length', function() {
        var ret = lcs('aacbabbcc', 'dbabbc');
        console.log(ret);
        expect(ret).toBe('babbc');
    });*/

});