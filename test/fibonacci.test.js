'use strict'

const _ = require('lodash')
const assert = require('assert')
const fibonacci = require('../lib/fibonacci')

const reactComponentMock = {
  /**
   * This generates some sort of JSX thing and I have no idea
   * what it's supposed to look like
   */
  render () {

  }
}

function baseCase (type) {
  const sequence = fibonacci[type](1)
  assert.equal(sequence[0].current, 1)
}

function severalCases (type) {
  const sequence = fibonacci[type](5)
  assert.equal(sequence[0].current, 1)
  assert.equal(sequence[1].current, 1)
  assert.equal(sequence[2].current, 2)
  assert.equal(sequence[3].current, 3)
  assert.equal(sequence[4].current, 5)
}

describe('#fibonacci', () => {
  describe('iterative', () => {
    it('should throw if given bad args', () => {
      assert.throws(() => fibonacci.iterative('crap'), /wtf/)
    })
    it('should return correct base case (n=1)', () => baseCase('iterative'))
    it('should return the first several fibonacci numbers', () => severalCases('iterative'))
  })
  describe('recursive', () => {
    it('should throw if given bad args', () => {
      assert.throws(() => fibonacci.iterative('crap'), /wtf/)
    })
    it('should return correct base case (n=1)', () => baseCase('recursive'))
    it('should return the first several fibonacci numbers', () => severalCases('recursive'))
    it('sanity check', () => {
      const sequence = fibonacci.recursive(7)
      assert.equal(sequence[0].current, 1)
      assert.equal(sequence[1].current, 1)
      assert.equal(sequence[2].current, 2)
      assert.equal(sequence[3].current, 3)
      assert.equal(sequence[4].current, 5)
      assert.equal(sequence[5].current, 8)
      assert.equal(sequence[6].current, 13)
    })
  })
})
