/**
 * Check if getRandomValues exist in browser.
 * @type {Function}
 */

if (typeof window !== 'undefined') {
  var random = window.crypto && window.crypto.getRandomValues.bind(crypto)
}

/**
 * Generate cryptographically strong random number if possible.
 *
 * @param {Number?} range
 * @api public
 */

module.exports = (range = 5) => {
  var nb
  if (random) {
    const array = new Uint32Array(10)
    random(array)
    nb = array[0]
  } else {
    nb = (Math.random() * 0x100000000) | 0
  }
  return Math.abs(nb % range) + 1
}
