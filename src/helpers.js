import React from 'react'

export const If = ({ when, children }) => (when ? children : null)

export const createActionSet = actionName => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILED: `${actionName}_FAILED`
})

export const createUrl = (templateUrl, params) => {
  return templateUrl.replace(/\d/g, matched => params[matched - 1])
}

export const defaultState = {
  isFetching: false,
  data: [],
  error: null
}

export const createReducers = (ACTIONS = {}, initialState = defaultState) => (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case ACTIONS.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case ACTIONS.SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false
      }
    case ACTIONS.FAILED:
      return {
        ...state,
        error,
        data: state.data,
        isFetching: false
      }
    default:
      return state
  }
}
