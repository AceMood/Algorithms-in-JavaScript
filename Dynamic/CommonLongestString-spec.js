/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Common Longest String Test', function() {

    console.log("start testing");

    it('five length', function() {
        var ret = lcs('abbcc', 'dbbcc');
        console.log(ret);
        expect(ret).toBe('bbcc');
    });

    it('more than 10 length', function() {
        var ret = lcs('aacbabbcc', 'dbabbc');
        console.log(ret);
        expect(ret).toBe('babbc');
    });


    console.log("end testing");

});