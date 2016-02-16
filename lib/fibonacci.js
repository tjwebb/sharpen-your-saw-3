'use strict'

const _ = require('lodash')

const fibonacci = module.exports = {
  /**
   * untested :(
   */
  failPrecondition () {
    throw new RangeError('wtf')
  },

  iterative (length) {
    if (!_.isNumber(length)) return fibonacci.failPrecondition()

    let twoBack = 0;
    let oneBack = 0;
    let current = 1;

    return _.times(length, n => {
      if (n > 1) {
        twoBack = oneBack;
      }
      oneBack = current;
      current = current + twoBack;

      return {
        key: n,
        current: current
      };
    })
  },
  recursive (length) {
    if (!_.isNumber(length)) return fibonacci.failPrecondition()

    return fibonacci.recursiveHelper(length, 0, 1, 0, [ ])
  },

  recursiveHelper (length, i, cur, prev, list) {
    list.push({
      key: i,
      current: cur
    })

    if (i === length - 1) return list
    return fibonacci.recursiveHelper(
      length, i + 1, cur + prev, cur, list
    )
  }
}
