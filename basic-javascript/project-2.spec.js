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

        // it('should return null if only one input is provided', () => {
        //     let expected = null;

        //     const actual = helpers.getBiggest(1);

        //     expect(actual).toBe(expected);
        // });

        // it('should return null if no input is provided', () => {
        //     let expected = null;

        //     const actual = helpers.getBiggest();

        //     expect(actual).toBe(expected);
        // });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getBiggest(1, true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getBiggest(1, 'test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.getBiggest(1, [442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getBiggest(1, { number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.getBiggest(1, () => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('greeting()', () => {

        it('should return German greeting', () => {
            
            const expected = "Guten Tag!";
            
            const actual = funcs.greeting("German");
            
            expect(actual).toEqual(expected);
        });

        it('should return Spanish greeting', () => {
            
            const expected = "Hola!";
            
            const actual = funcs.greeting("Spanish");
            
            expect(actual).toEqual(expected);
        });

        it('should return default greeting', () => {
            
            const expected = "Hello!";
            
            const actual = funcs.greeting("");
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.greeting(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.greeting('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.greeting([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.greeting({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.greeting(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('isTenOrFive()', () => {

        it('should return true if input is 5 or 10', () => {
            
            const expected = true;
            
            const actual = funcs.isTenOrFive(5);
            
            expect(actual).toEqual(expected);
        });

        it('should return true if input is 5 or 10', () => {
            
            const expected = true;
            
            const actual = funcs.isTenOrFive(10);
            
            expect(actual).toEqual(expected);
        });

        it('should return false if input is not 5 or 10', () => {
            
            const expected = false;
            
            const actual = funcs.isTenOrFive(11);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.isTenOrFive(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.isTenOrFive('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.isTenOrFive([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.isTenOrFive({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.isTenOrFive(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('isInRange()', () => {

        it('should return true if less than 50 but greater than 20', () => {
            
            const expected = true;
            
            const actual = funcs.isInRange(31);
            
            expect(actual).toEqual(expected);
        });

        it('should return false if greater than 50', () => {
            
            const expected = false;
            
            const actual = funcs.isInRange(51);
            
            expect(actual).toEqual(expected);
        });

        it('should return false if less than 20', () => {
            
            const expected = false;
            
            const actual = funcs.isInRange(19);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.isInRange(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.isInRange('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.isInRange([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.isInRange({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.isInRange(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('isInteger()', () => {

        it('should return true if given number is an integer', () => {
            
            const expected = true;
            
            const actual = funcs.isInteger(5);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.isInteger(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.isInteger('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.isInteger([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.isInteger({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.isInteger(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('fizzBuzz()', () => {

        it('should return fizz if num % 3 === 0', () => {
            
            const expected = 'fizz';
            
            const actual = funcs.fizzBuzz(3);
            
            expect(actual).toEqual(expected);
        });

        it('should return buzz if num % 5 === 0', () => {
            
            const expected = 'buzz';
            
            const actual = funcs.fizzBuzz(5);
            
            expect(actual).toEqual(expected);
        });

        it('should return fizzbuzz if num % 5 === 0 && num % 3 === 0', () => {
            
            const expected = 'fizzbuzz';
            
            const actual = funcs.fizzBuzz(15);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.fizzBuzz(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.fizzBuzz('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.fizzBuzz([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.fizzBuzz({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.fizzBuzz(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('isPrime()', () => {

        it('should return true if given value is prime', () => {
            
            const expected = true;
            
            const actual = funcs.isPrime(2);
            
            expect(actual).toEqual(expected);
        });

        it('should return false if given value is not prime', () => {
            
            const expected = false;
            
            const actual = funcs.isPrime(10);
            
            expect(actual).toEqual(expected);
        });

        it('should return false if given value is less than 2', () => {
            
            const expected = false;
            
            const actual = funcs.isPrime(-4);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.isPrime(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.isPrime('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is array', () => {

                const actual = () => { helpers.isPrime([442]) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.isPrime({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.isPrime(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('returnFirst()', () => {

        it('should return first value of array', () => {
            
            const expected = 0;
            
            const actual = funcs.returnFirst([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.returnFirst(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.returnFirst('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.returnFirst(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.returnFirst({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.returnFirst(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('returnLast()', () => {

        it('should return last value of array', () => {
            
            const expected = 5;
            
            const actual = funcs.returnLast([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.returnLast(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.returnLast('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.returnLast(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.returnLast({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.returnLast(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('getArrayLength()', () => {

        it('should return the length of the given array', () => {
            
            const expected = 6;
            
            const actual = funcs.getArrayLength([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.getArrayLength(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.getArrayLength('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.getArrayLength(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.getArrayLength({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.returnLast(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('incrementByOne()', () => {

        it('should return the given array with each index incremented by 1', () => {
            
            const expected = [1, 2, 3, 4, 5, 6];
            
            const actual = funcs.incrementByOne([0, 1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.incrementByOne(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.incrementByOne('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.incrementByOne(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.incrementByOne({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.incrementByOne(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('addItemToArray()', () => {

        it('should return the given array with the given item pushed', () => {
            
            const expected = [0, 1, 2, 3, 4, 5, 6];
            
            const actual = funcs.addItemToArray([0, 1, 2, 3, 4, 5], 6);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.addItemToArray(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.addItemToArray('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.addItemToArray(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.addItemToArray({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.addItemToArray(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('addItemToFront()', () => {

        it('should return the given array with the given item unshifted', () => {
            
            const expected = [6, 0, 1, 2, 3, 4, 5];
            
            const actual = funcs.addItemToFront([0, 1, 2, 3, 4, 5], 6);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.addItemToFront(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.addItemToFront('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.addItemToFront(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.addItemToFront({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.addItemToFront(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('wordsToSentence()', () => {

        it('should return the given words concatenated into a sentance', () => {
            
            const expected = "Hello my name is Keiran.";
            
            const actual = funcs.wordsToSentence(["Hello", "my", "name", "is", "Keiran."]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.wordsToSentence(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.wordsToSentence('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.wordsToSentence(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.wordsToSentence({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.wordsToSentence(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('contains()', () => {

        it('should return true if the given item is in the given array', () => {
            
            const expected = true;
            
            const actual = funcs.contains(["Hello", "my", "name", "is", "Keiran."], "Hello");
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.contains(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.contains(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.contains({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.contains(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('addNumbers()', () => {

        it('should return the sum of the given numbers', () => {
            
            const expected = 15;
            
            const actual = funcs.addNumbers([1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.addNumbers(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.addNumbers('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.addNumbers(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.addNumbers({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.addNumbers(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('averageTestScore()', () => {

        it('should return the average of the given array of numbers', () => {
            
            const expected = 83;
            
            const actual = funcs.averageTestScore([70, 80, 80, 90, 95]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.averageTestScore(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.averageTestScore('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.averageTestScore(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.averageTestScore({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.averageTestScore(() => 423) };

                expect(actual).toThrow();
            });
        });
    });

    describe('largestNumber()', () => {

        it('should return the largest of the given numbers', () => {
            
            const expected = 5;
            
            const actual = funcs.largestNumber([1, 2, 3, 4, 5]);
            
            expect(actual).toEqual(expected);
        });

        describe('wrong inputs', () => {

            it('should throw error if input is bool', () => {
                const actual = () => { helpers.largestNumber(true) };

                expect(actual).toThrow();
            });

            it('should throw error if input is string', () => {

                const actual = () => { helpers.largestNumber('test123') };

                expect(actual).toThrow();
            });

            it('should throw error if input is number', () => {

                const actual = () => { helpers.largestNumber(442) };

                expect(actual).toThrow();
            });

            it('should throw error if input is object', () => {

                const actual = () => { helpers.largestNumber({ number: 422 }) };

                expect(actual).toThrow();
            });

            it('should throw error if input is function', () => {

                const actual = () => { helpers.largestNumber(() => 423) };

                expect(actual).toThrow();
            });
        });
    });
});