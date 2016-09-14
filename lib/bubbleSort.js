'use strict'

module.exports = (data) => {
  if (!Array.isArray(data)) throw new TypeError('data must be an array')
  if (!data.length) throw new RangeError('data is empty. nothing to sort')

  let len = data.length
  let swapped = false
  do {
    swapped = false
    for (let i = 1; i < len; i++) {
      console.log(data[i - 1], data[i])
      if (data[i - 1] > data[i]) {
        let temp = data[i - 1]
        data[i - 1] = data[i]
        data[i] = temp
        swapped = true
      }
    }

    len -= 1
  } while (swapped)

  return data
}
