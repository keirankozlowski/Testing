const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {

    describe('multiplyByTen()', () => {

        it('should multiply given number by ten', () => {

            const expected = 100;

            const actual = helpers.multiplyByTen(10);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.multiplyByTen();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.multiplyByTen(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.multiplyByTen('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.multiplyByTen([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.multiplyByTen({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.multiplyByTen(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('subtractFive()', () => {

        it('should subtract given number by five', () => {
            const expected = 95;

            const actual = helpers.subtractFive(100);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.subtractFive();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.subtractFive(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.subtractFive('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.subtractFive([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.subtractFive({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.subtractFive(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('areSameLength()', () => {

        it('should return true if strings are equal length', () => {
            const expected = true;

            const actual = helpers.areSameLength('meme', 'mama');

            expect(actual).toEqual(expected);
        });

        it('should return false if strings are not equal length', () => {
            const expected = false;

            const actual = helpers.areSameLength('mememan', 'mama');

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.areSameLength();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            // it('should throw error if input is bool', () => {
            //     const actual = () => { helpers.areSameLength('mememan', false) };

            //     expect(actual).toThrow();
            // });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.areSameLength('mememan', 123) };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.areSameLength('mememan', [442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.areSameLength('mememan', { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.areSameLength('mememan', () => 'mememan') };

                expect(actual).toThrow();
            });
        });
    });

    describe('areEqual()', () => {

        it('should return true if both variables are deep equal', () => {
            const expected = true;
            const a = 'test123';
            const b = 'test123';
            const actual = helpers.areEqual(a, b);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.areEqual(5);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.areEqual();

            expect(actual).toBe(expected);
        });
    });

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

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.lessThanNinety();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.lessThanNinety(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.lessThanNinety('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.lessThanNinety([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.lessThanNinety({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.lessThanNinety(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('greaterThanFifty()', () => {

        it('should return true if number greater than 50', () => {
            const expected = true;

            const actual = helpers.greaterThanFifty(55);

            expect(actual).toEqual(expected);
        });

        it('should return false if number less than 50', () => {
            const expected = false;

            const actual = helpers.greaterThanFifty(49);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.greaterThanFifty();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            // it('should throw error if input is bool', () => {
            //     const actual = () => { helpers.greaterThanFifty(false) };

            //     expect(actual).toThrow();
            // });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.greaterThanFifty('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.greaterThanFifty([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.greaterThanFifty({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.greaterThanFifty(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('add()', () => {

        it('should add together two values', () => {
            const expected = 8;

            const actual = helpers.add(4, 4);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.add(4);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.add();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.add(123, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.add(123, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.add(123, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.add(123, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.add(123, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('subtract()', () => {

        it('should subtract second value from the first', () => {
            const expected = 6;

            const actual = helpers.subtract(10, 4);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.subtract(4);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.subtract();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.subtract(123, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.subtract(123, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.subtract(123, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.subtract(123, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.subtract(123, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('divide()', () => {

        it('should divide first value by the second value', () => {
            const expected = 3;

            const actual = helpers.divide(15, 5);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.divide(4);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.divide();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.divide(123, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.divide(123, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.divide(123, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.divide(123, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.divide(123, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('multiply()', () => {

        it('should find product of two values', () => {
            const expected = 150;

            const actual = helpers.multiply(75, 2);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.multiply(4);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.multiply();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.multiply(123, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.multiply(123, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.multiply(123, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.multiply(123, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.multiply(123, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('getRemainder()', () => {

        it('should find remainder of a quotient', () => {
            const expected = 1;

            const actual = helpers.getRemainder(10, 3);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.getRemainder(4);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.getRemainder();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getRemainder(123, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getRemainder(123, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getRemainder(123, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getRemainder(123, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getRemainder(123, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('isEven()', () => {

        it('should return true if number is even', () => {
            const expected = true;

            const actual = helpers.isEven(2);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.isEven();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.isEven(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.isEven('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.isEven([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.isEven({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.isEven(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('isOdd()', () => {

        it('should return true if number is odd', () => {
            const expected = true;

            const actual = helpers.isOdd(1);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.isOdd();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.isOdd(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.isOdd('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.isOdd([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.isOdd({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.isOdd(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('square()', () => {

        it('should return the square of the given value', () => {
            const expected = 4;

            const actual = helpers.square(2);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.square();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.square(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.square('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.square([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.square({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.square(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('cube()', () => {

        it('should return the cubed value of the given value', () => {
            const expected = 8;

            const actual = helpers.cube(2);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.cube();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.cube(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.cube('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.cube([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.cube({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.cube(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('raiseToPower()', () => {

        it('should return num value to the power of exponent value', () => {
            const expected = 8;

            const actual = helpers.raiseToPower(2, 3);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.raiseToPower(4);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.raiseToPower();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.raiseToPower(123, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.raiseToPower(123, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.raiseToPower(123, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.raiseToPower(123, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.raiseToPower(123, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('roundNumber()', () => {

        it('should round the given number', () => {
            const expected = 1;

            const actual = helpers.roundNumber(1.2);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.roundNumber();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.roundNumber(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.roundNumber('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.roundNumber([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.roundNumber({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.roundNumber(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('roundUp()', () => {

        it('should round up the given number', () => {
            const expected = 2;

            const actual = helpers.roundUp(1.2);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.roundUp();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.roundUp(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.roundUp('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.roundUp([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.roundUp({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.roundUp(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('addExclamationPoint()', () => {

        it('should add an exclamation point to the end of the given string', () => {
            const expected = "Hello!";

            const actual = helpers.addExclamationPoint("Hello");

            expect(actual).toEqual(expected);
        });
    });

    describe('addExclamationPoint()', () => {

        it('should add an exclamation point to the end of the given string', () => {
            const expected = "Hello!";

            const actual = helpers.addExclamationPoint("Hello");

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.addExclamationPoint();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.addExclamationPoint(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.addExclamationPoint(1) };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.addExclamationPoint(['hi', 'meme']) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.addExclamationPoint({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.addExclamationPoint(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('combineNames()', () => {

        it('should concatenate the given strings', () => {
            const expected = "First Name";

            const actual = helpers.combineNames("First", "Name");

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.combineNames('first');

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.combineNames();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.combineNames(1, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.combineNames(1, 'meme') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.combineNames(['hi', 'meme'], 'meme') };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.combineNames({ number: 422 }, 'meme') };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.combineNames(() => 423, 'meme') };

                expect(actual).toThrow();
            });
        });
    });

    describe('getGreeting()', () => {

        it('should return -Hello (name var)!-', () => {
            const expected = "Hello name!";

            const actual = helpers.getGreeting('name');

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.getGreeting();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getGreeting(1, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.getGreeting(1) };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getGreeting([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getGreeting({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getGreeting(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('getRectangleArea()', () => {

        it('should return length * width', () => {
            const expected = 6;

            const actual = helpers.getRectangleArea(3, 2);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.getRectangleArea(1);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.getRectangleArea();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getRectangleArea(1, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getRectangleArea(1, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getRectangleArea(1, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getRectangleArea(1, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getRectangleArea(1, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('getTriangleArea()', () => {

        it('should return .5 * base * height', () => {
            const expected = 1;

            const actual = helpers.getTriangleArea(1, 2);

            expect(actual).toEqual(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.getTriangleArea(1);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.getTriangleArea();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getTriangleArea(1, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getTriangleArea(1, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getTriangleArea(1, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getTriangleArea(1, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getTriangleArea(1, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('getCircleArea()', () => {

        it('should return Math.PI * radius * radius', () => {
            const expected = 28.274333882308138;

            const actual = helpers.getCircleArea(3);

            expect(actual).toEqual(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.getCircleArea();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getCircleArea(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getCircleArea('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getCircleArea([442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getCircleArea({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getCircleArea(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('getRectangularPrismVolume()', () => {

        it('should return width * height * length', () => {
            const expected = 6;

            const actual = helpers.getRectangularPrismVolume(1, 2, 3);

            expect(actual).toEqual(expected);
        });

        it('should return null if only two inputs are provided', () => {
            let expected = null;

            const actual = helpers.getRectangularPrismVolume(1, 2);

            expect(actual).toBe(expected);
        });

        it('should return null if only one input is provided', () => {
            let expected = null;

            const actual = helpers.getRectangularPrismVolume(1);

            expect(actual).toBe(expected);
        });

        it('should return null if no input is provided', () => {
            let expected = null;

            const actual = helpers.getRectangularPrismVolume();

            expect(actual).toBe(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getRectangularPrismVolume(1, 2, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getRectangularPrismVolume(1, 2, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getRectangularPrismVolume(1, 2, [442, 6786, 899]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getRectangularPrismVolume(1, 2, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getRectangularPrismVolume(1, 2, () => 423) };

                expect(actual).toThrow();
            });
        });
    });
});