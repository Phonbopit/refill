const createActionSet = actionName => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILED: `${actionName}_FAILED`
})

const createUrl = (templateUrl, params) => {
  return templateUrl.replace(/\d/g, matched => params[matched - 1])
}

module.exports = {
  createActionSet,
  createUrl
}
