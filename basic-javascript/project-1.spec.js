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

        it('should return true if strings are equal length', () => {
            const expected = true;
            
            const actual = helpers.areSameLength('meme', 'mama');
            
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

    describe('lessThanNinety()', () => {

        it('should return true if number less than 90', () => {
            const expected = true;

            const actual = helpers.lessThanNinety(85);

            expect(actual).toEqual(expected);
        });
        it('should return false if number greater than 90', () => {
            const expected = false;

            const actual = helpers.lessThanNinety(95);

            expect(actual).toEqual(expected);
        });
    })

    describe('greaterThanFifty()', () => {

        it('should return true if number greater than 50', () => {
            const expected = true;

            const actual = helpers.greaterThanFifty(55);

            expect(actual).toEqual(expected);
        });
    })

    describe('add()', () => {

        it('should add together two values', () => {
            const expected = 8;

            const actual = helpers.add(4, 4);

            expect(actual).toEqual(expected);
        })
    })

    describe('subtract()', () => {

        it('should subtract second value from the first', () => {
            const expected = 6;

            const actual = helpers.subtract(10, 4);

            expect(actual).toEqual(expected);
        })
    })

    describe('divide()', () => {

        it('should divide first value by the second value', () => {
            const expected = 3;

            const actual = helpers.divide(15, 5);

            expect(actual).toEqual(expected);
        })
    })

    describe('multiply()', () => {

        it('should find product of two values', () => {
            const expected = 150;

            const actual = helpers.multiply(75, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('getRemainder()', () => {

        it('should find remainder of a quotient', () => {
            const expected = 1;

            const actual = helpers.getRemainder(10, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('isEven()', () => {

        it('should return true if number is even', () => {
            const expected = true;

            const actual = helpers.isEven(2);

            expect(actual).toEqual(expected);
        })
    })

    describe('isOdd()', () => {

        it('should return true if number is odd', () => {
            const expected = true;
            
            const actual = helpers.isOdd(1);

            expect(actual).toEqual(expected);
        })
    })

    describe('square()', () => {

        it('should return the square of the given value', () => {
            const expected = 4;
            
            const actual = helpers.square(2);

            expect(actual).toEqual(expected);
        })
    })

    describe('cube()', () => {

        it('should return the cubed value of the given value', () => {
            const expected = 8;
            
            const actual = helpers.cube(2);

            expect(actual).toEqual(expected);
        })
    })

    describe('raiseToPower()', () => {

        it('should return num value to the power of exponent value', () => {
            const expected = 8;
            
            const actual = helpers.raiseToPower(2, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('roundNumber()', () => {

        it('should round the given number', () => {
            const expected = 1;
            
            const actual = helpers.roundNumber(1.2);

            expect(actual).toEqual(expected);
        })
    })

    describe('roundUp()', () => {

        it('should round up the given number', () => {
            const expected = 2;
            
            const actual = helpers.roundUp(1.2);

            expect(actual).toEqual(expected);
        })
    })

    describe('addExclamationPoint()', () => {

        it('should add an exclamation point to the end of the given string', () => {
            const expected = "Hello!";
            
            const actual = helpers.addExclamationPoint("Hello");

            expect(actual).toEqual(expected);
        })
    })

    describe('addExclamationPoint()', () => {

        it('should add an exclamation point to the end of the given string', () => {
            const expected = "Hello!";
            
            const actual = helpers.addExclamationPoint("Hello");

            expect(actual).toEqual(expected);
        })
    })

    describe('combineNames()', () => {

        it('should concatenate the given strings', () => {
            const expected = "First Name";
            
            const actual = helpers.combineNames("First", "Name");

            expect(actual).toEqual(expected);
        })
    })

    describe('getGreeting()', () => {

        it('should return -Hello (name var)!-', () => {
            const expected = "Hello name!";
            
            const actual = helpers.getGreeting("name");

            expect(actual).toEqual(expected);
        })
    })

    describe('getRectangleArea()', () => {

        it('should return length * width', () => {
            const expected = 6;
            
            const actual = helpers.getRectangleArea(3, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('getTriangleArea()', () => {

        it('should return .5 * base * height', () => {
            const expected = 1;
            
            const actual = helpers.getTriangleArea(1, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('getCircleArea()', () => {

        it('should return Math.PI * radius * radius', () => {
            const expected = 28.274333882308138;
            
            const actual = helpers.getCircleArea(3);

            expect(actual).toEqual(expected);
        })
    })

    describe('getRectangularPrismVolume()', () => {

        it('should return width * height * length', () => {
            const expected = 6;
            
            const actual = helpers.getRectangularPrismVolume(1, 2, 3);

            expect(actual).toEqual(expected);
        })
    })
});