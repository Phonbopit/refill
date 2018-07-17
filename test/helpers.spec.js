const { createUrl, createActionSet, createReducers } = require('../src/helpers')

describe('createUrl()', () => {
  it('should replace template url with params', () => {
    const URL = createUrl('/users/1/comments/2', ['123', '456'])
    expect(URL).toEqual('/users/123/comments/456')
  })
})

describe('createActionSet()', () => {
  it('should create action set for redux', () => {
    const ACTIONS = createActionSet('FETCH_USERS')

    expect(ACTIONS).toEqual({
      PENDING: 'FETCH_USERS_PENDING',
      SUCCESS: 'FETCH_USERS_SUCCESS',
      FAILED: 'FETCH_USERS_FAILED'
    })
  })
})

describe('createReducers()', () => {
  let ACTIONS
  let reducer

  beforeAll(() => {
    ACTIONS = createActionSet('MOCK_ACTION_NAME')
  })

  it('should return reducer function', () => {
    expect(typeof createReducers(ACTIONS)).toBe('function')
  })

  it('should return defaultState when no match', () => {
    const reducer = createReducers(ACTIONS)

    const result = reducer(undefined, {
      type: 'NO_ACTION_FOUND'
    })

    expect(result).toEqual({
      isFetching: false,
      data: [],
      error: null
    })
  })

  describe('Array Data e.g. fetching users or posts)', () => {
    beforeAll(() => {
      reducer = createReducers(ACTIONS)
    })

    it('should handle ACTIONS.PENDING state', () => {
      const result = reducer(undefined, {
        type: ACTIONS.PENDING
      })

      expect(result).toEqual({
        isFetching: true,
        data: [],
        error: null
      })
    })

    it('should handle ACTIONS.SUCCESS state', () => {
      const result = reducer(undefined, {
        type: ACTIONS.SUCCESS,
        payload: [{ id: 1, name: 'John Doe' }]
      })

      expect(result).toEqual({
        isFetching: false,
        data: [{ id: 1, name: 'John Doe' }],
        error: null
      })
    })

    it('should handle ACTIONS.FAILED state', () => {
      const result = reducer(undefined, {
        type: ACTIONS.FAILED,
        error: 'Something went wrong!'
      })

      expect(result).toEqual({
        isFetching: false,
        data: [],
        error: 'Something went wrong!'
      })
    })
  })

  describe('Object Data e.g. fetching user or post by id)', () => {
    beforeAll(() => {
      const initialState = {
        isFetching: false,
        data: null,
        error: null
      }

      reducer = createReducers(ACTIONS, initialState)
    })

    it('should handle ACTIONS.PENDING state', () => {
      const result = reducer(undefined, {
        type: ACTIONS.PENDING
      })

      expect(result).toEqual({
        isFetching: true,
        data: null,
        error: null
      })
    })

    it('should handle ACTIONS.SUCCESS state', () => {
      const result = reducer(undefined, {
        type: ACTIONS.SUCCESS,
        payload: { id: 1, name: 'John Doe' }
      })

      expect(result).toEqual({
        isFetching: false,
        data: { id: 1, name: 'John Doe' },
        error: null
      })
    })

    it('should handle ACTIONS.FAILED state', () => {
      const result = reducer(undefined, {
        type: ACTIONS.FAILED,
        error: 'Something went wrong!'
      })

      expect(result).toEqual({
        isFetching: false,
        data: null,
        error: 'Something went wrong!'
      })
    })
  })
})
