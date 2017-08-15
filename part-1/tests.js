const assert = require('chai').assert;
const {weekday, capitolizeFourth, getValues, filterAround}   = require('./functions.js')

describe.only('tests for weekday', () => {
  it('weekday should return the weekday as a string ', () => {
    assert.equal(weekday(1977, 8, 28),'Wednesday')
  })
  it('weekday should throw an error', () => {
    assert.throws(() => {
      weekday('Bob')}, Error, 'This is not a valid date Object')
  })
})

describe('tests for capitolizeFourth', () => {
  it('capitolizeFourth should throw an error', () => {
    assert.throws(() => {capitolizeFourth(2,4,5,8)}, Error, 'Please enter a valid string')
  })
  it('capitolizeFourth should return a string with every 4th character converted to upper case and the rest converted to lower case', () => {
    assert.equal(capitolizeFourth('Eenie, Meenie, Miney, Moe'), 'eenIe, MeenIe, MineY, mOe')
  })
})

describe('tests for getValues', () => {
  it('getValues should throw an error', () => {
    assert.throws(() => {
      getValues('Bob')}, Error, 'Please enter a valid object')
  })
  it('getValues should return all the values for an object', () => {
    assert.deepEqual(getValues({
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'}), ['Dominique', 30, '555-555-5555'])
  })
})

describe('tests for filterAround', ()=> {
  it('filterAround should throw an error', () => {
    assert.throws(() => {
      filterAround('supercalafragalisticexpialadoshus')}, Error, 'Please enter a valid Array')
  })
  it('filterAround returns a new array containing only the elements from the source array that come before lower alphabetically and after upper', () => {
    assert.deep(filterAround(['dog', 'cat', 'zebra', 'ape', 'lion', 'cow'],'cow', 'dog'), ['cat', 'zebra', 'ape', 'lion'])
  })
})