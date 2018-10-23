const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', () => {

    describe('getBiggest()', () => {

        it('should return the larger value', () => {
            
            const expected = 2;
            
            const actual = funcs.getBiggest(1, 2);
            
            expect(actual).toEqual(expected);
        });

        it('should return y value if values are equal', () => {
            
            const expected = 2;
            
            const actual = funcs.getBiggest(2, 2);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('greeting()', () => {

        it('should return German greeting', () => {
            
            const expected = "Guten Tag!";
            
            const actual = funcs.greeting("German");
            
            expect(actual).toEqual(expected);
        });
    })

    describe('isTenOrFive()', () => {

        it('should return true if input is 5 or 10', () => {
            
            const expected = true;
            
            const actual = funcs.isTenOrFive(5);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('isInRange()', () => {

        it('should return true if less than 50 but greater than 20', () => {
            
            const expected = true;
            
            const actual = funcs.isInRange(31);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('isInteger()', () => {

        it('should return true if given number is an integer', () => {
            
            const expected = true;
            
            const actual = funcs.isInteger(5);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('fizzBuzz()', () => {

        it('should return fizzbuzz if num % 5 === 0 && num % 3 === 0', () => {
            
            const expected = 'fizzbuzz';
            
            const actual = funcs.fizzBuzz(15);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('isPrime()', () => {

        it('should return true if given value is prime', () => {
            
            const expected = true;
            
            const actual = funcs.isPrime(2);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('returnFirst()', () => {

        it('should return first value of array', () => {
            
            const expected = 0;
            
            const actual = funcs.returnFirst([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('returnLast()', () => {

        it('should return last value of array', () => {
            
            const expected = 5;
            
            const actual = funcs.returnLast([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('getArrayLength()', () => {

        it('should return the length of the given array', () => {
            
            const expected = 6;
            
            const actual = funcs.getArrayLength([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('incrementByOne()', () => {

        it('should return the given array with each index incremented by 1', () => {
            
            const expected = [1, 2, 3, 4, 5, 6];
            
            const actual = funcs.incrementByOne([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('addItemToArray()', () => {

        it('should return the given array with the given item pushed', () => {
            
            const expected = [0, 1, 2, 3, 4, 5, 6];
            
            const actual = funcs.addItemToArray([0, 1, 2, 3, 4, 5], 6);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('addItemToFront()', () => {

        it('should return the given array with the given item unshifted', () => {
            
            const expected = [6, 0, 1, 2, 3, 4, 5];
            
            const actual = funcs.addItemToFront([0, 1, 2, 3, 4, 5], 6);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('wordsToSentence()', () => {

        it('should return the given words concatenated into a sentance', () => {
            
            const expected = "Hello my name is Keiran.";
            
            const actual = funcs.wordsToSentence(["Hello", "my", "name", "is", "Keiran."]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('contains()', () => {

        it('should return true if the given item is in the given array', () => {
            
            const expected = true;
            
            const actual = funcs.contains(["Hello", "my", "name", "is", "Keiran."], "Hello");
            
            expect(actual).toEqual(expected);
        });
    })

    describe('addNumbers()', () => {

        it('should return the sum of the given numbers', () => {
            
            const expected = 15;
            
            const actual = funcs.addNumbers([1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('averageTestScore()', () => {

        it('should return the average of the given array of numbers', () => {
            
            const expected = 83;
            
            const actual = funcs.averageTestScore([70, 80, 80, 90, 95]);
            
            expect(actual).toEqual(expected);
        });
    })

    describe('largestNumber()', () => {

        it('should return the largest of the given numbers', () => {
            
            const expected = 5;
            
            const actual = funcs.largestNumber([1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });
    })
});