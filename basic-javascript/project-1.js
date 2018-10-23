/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  } else return num * 10;
};

const subtractFive = num => {
  if (!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  } else return num - 5;
};

const areSameLength = (str1, str2) => {
  if (!str1 || !str2) {
    return null;
  } else if (typeof str1 !== 'string') {
    throw new Error('str1 must be strings.')
  } else if (typeof str2 !== 'string') {
    throw new Error('str2 must be strings.')
  } else if(str1 == true || str1 == false ) {
    throw new Error('str1 is a bool.')
  } else if(str2 == true || str2 == false) {
    throw new Error('str2 is a bool.')
  } else if(str1.length !== str2.length) {
    return false;
  } else return true;
};

const areEqual = (x, y) => {
  if(!x || !y) {
    return null;
  } else if(x !== y) {
    return false;
  } else return true;
};

const lessThanNinety = num => {
  if (!num) {
    return null;
  } else if (num > 90) {
    return false;
  } else if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  } else return true;
};

const greaterThanFifty = num => {
  if (!num) {
    return null;
  } else if (num < 50) {
    return false;
  } else if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  } else return true;
};

const add = (x, y) => {
  if(!x || !y) {
    return null;
  } else if (typeof x !== 'number') {
    throw new Error('X value must be a number.')
  } else if (typeof y !== 'number') {
    throw new Error('Y value must be a number.')
  } else return x + y;
};

const subtract = (x, y) => {
  if(!x || !y) {
    return null;
  } else if (typeof x !== 'number') {
    throw new Error('X value must be a number.')
  } else if (typeof y !== 'number') {
    throw new Error('Y value must be a number.')
  } else return x - y;
};

const divide = (x, y) => {
  if(!x || !y) {
    return null;
  } else if (typeof x !== 'number') {
    throw new Error('X value must be a number.')
  } else if (typeof y !== 'number') {
    throw new Error('Y value must be a number.')
  } else return x / y;
};

const multiply = (x, y) => {
  if(!x || !y) {
    return null;
  } else if (typeof x !== 'number') {
    throw new Error('X value must be a number.')
  } else if (typeof y !== 'number') {
    throw new Error('Y value must be a number.')
  } else return x * y;
};

const getRemainder = (x, y) => {
  if(!x || !y) {
    return null;
  } else if (typeof x !== 'number') {
    throw new Error('X value must be a number.')
  } else if (typeof y !== 'number') {
    throw new Error('Y value must be a number.')
  } else return x % y;
};

const isEven = num => {
  if(!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Given value must be a number.')
  } else if (num % 2 === 0) {
    return true;
  } else return false;
};

const isOdd = num => {
  if(!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Given value must be a number.')
  } else if (num % 2 === 0) {
    return false;
  } else return true;
};

const square = num => {
  if(!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Given value must be a number.')
  } else return num * num;
};

const cube = num => {
  if(!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Given value must be a number.')
  } else  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if(!num || !exponent) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Num value must be a number.')
  } else if (typeof exponent !== 'number') {
    throw new Error('Exponent value must be a number.')
  } else return num ** exponent;
};

const roundNumber = num => {
  if(!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Given value must be a number.')
  } else return Math.round(num);
};

const roundUp = num => {
  if(!num) {
    return null;
  } else if (typeof num !== 'number') {
    throw new Error('Given value must be a number.')
  } else return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if(!length || !width) {
    return null;
  } else if (typeof length !== 'number') {
    throw new Error('length value must be a number.')
  } else if (typeof width !== 'number') {
    throw new Error('width value must be a number.')
  } else return length * width;
};

const getTriangleArea = (base, height) => {
  if(!base || !height) {
    return null;
  } else if (typeof base !== 'number') {
    throw new Error('base value must be a number.')
  } else if (typeof height !== 'number') {
    throw new Error('height value must be a number.')
  } else return 0.5 * base * height;
};

const getCircleArea = radius => {
  if(!radius) {
    return null;
  } else if (typeof radius !== 'number') {
    throw new Error('radius value must be a number.')
  } else return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if(!length || !width || !height) {
    return null;
  } else if (typeof length !== 'number') {
    throw new Error('length value must be a number.')
  } else if (typeof width !== 'number') {
    throw new Error('width value must be a number.')
  } else if (typeof height !== 'number') {
    throw new Error('height value must be a number.')
  } else return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
