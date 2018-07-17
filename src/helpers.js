const createActionSet = actionName => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILED: `${actionName}_FAILED`
})

const createUrl = (templateUrl, params) => {
  return templateUrl.replace(/\d/g, matched => params[matched - 1])
}

const defaultState = {
  isFetching: false,
  data: [],
  error: null
}

const createReducers = (ACTIONS = {}, initialState = defaultState) => (
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

module.exports = {
  createActionSet,
  createUrl,
  createReducers
}
