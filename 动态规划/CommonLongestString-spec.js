/**
 * @fileoverview
 * @author Leo.Zhang
 * @email zmike86@gmail.com
 */

describe('Common Longest String Test', function() {

    it('five length', function() {
        expect(lcs('abbcc', 'dbbcc')).toBe('bbcc');
    });

    it('more than 10 length', function() {
        expect(lcs('aacbabbcc', 'dbabbc')).toBe('babbc');
    });

});