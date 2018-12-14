/**
 * Dependencies
 */

const test = require('tape')
const random = require('..')


test('should generate a number between 1 and 6', assert => {
  let plan = 100
  assert.plan(plan * 2)
  while (plan--) {
    const nb = random()
    assert.equal(nb > 0, true)
    assert.equal(nb < 7, true)
  }
})

test('should generate a number between 1 and a given range', assert => {
  let plan = 100
  const range = 12
  assert.plan(plan * 2)
  while (plan--) {
    const nb = random(range)
    assert.equal(nb > 0, true)
    assert.equal(nb < (range + 2), true)
  }
})
