const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {

    describe('multiplyByTen()', () => {

        it('should multiply given number by ten', () => {
            
            const expected = 100;
            
            const actual = helpers.multiplyByTen(10);
            
            expect(actual).toEqual(expected);
        });
        
    })

    describe('subtractFive()', () => {

        it('should subtract given number by five', () => {
            const expected = 95;
            
            const actual = helpers.subtractFive(100);
            
            expect(actual).toEqual(expected);
        });
    })
    describe('areSameLength()', () => {

        it('should return true if both strings are same length', () => {
            const expected = true;
            
            const actual = helpers.areSameLength('hello', 'teach');
            
            expect(actual).toEqual(expected);
        });
    })

    describe('areEqual()', () => {

        it('should return true if both variables are deep equal', () => {
            const expected = true;
            const a = 'test123';
            const b = 'test123';
            const actual = helpers.areEqual(a, b);

            expect(actual).toEqual(expected);
        });
    })
});