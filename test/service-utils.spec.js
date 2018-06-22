const { createUrl } = require('../src/service-utils')

test('it should replace template url with params', () => {
	const URL = createUrl('/users/1/comments/2', ['123', '456'])
	expect(URL).toEqual('/users/123/comments/456')
})
