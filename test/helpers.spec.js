const { createUrl, createActionSet } = require('../src/helpers')

describe('createUrl()', () => {
  test('it should replace template url with params', () => {
    const URL = createUrl('/users/1/comments/2', ['123', '456'])
    expect(URL).toEqual('/users/123/comments/456')
  })
})

describe('createActionSet()', () => {
  test('it should create action set for redux', () => {})
})
