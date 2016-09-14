const expect = require('chai').expect

const bubble = require('../lib/bubbleSort')

describe('testing bubble sort', () => {
  it('should fail if the data is not an array', () => {
    const fail = () => bubble({})
    expect(fail).to.throw(TypeError)
  })

  it('should fail if the data array is empty', () => {
    const fail = () => bubble([])
    expect(fail).to.throw(RangeError)
  })

  it('should return a sorted array of nums', () => {
    const data = [2, 1, 4, 3]
    const expected = [1, 2, 3, 4]
    const output = bubble(data)
    expect(output).to.eql(expected)
  })

  it('should return a sorted array of strings', () => {
    const data = ['A', 'word', 'ward', 'a']
    const expected = ['A', 'a', 'ward', 'word']
    const output = bubble(data)
    expect(output).to.eql(expected)
  })
})
