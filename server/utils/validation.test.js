const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var value = 19;
        expect(isRealString(value)).toBe(false);
    }); 
    it('should reject strings with only spaces', () => {
        var value = "       ";
        expect(isRealString(value)).toBe(false);
    }); 
    it('should allow strings with non-space characters', () => {
        var value = "   LORHShfdskjfg    ";
        expect(isRealString(value)).toBe(true);
    }); 
});

