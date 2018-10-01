import { sum } from './index'

describe('Sum', () => {

  it('Adds', () => {
    expect(sum(2)(2)).toBe(4)
  })
})