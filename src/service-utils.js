module.exports.createUrl = (templateUrl, params) => {
  return templateUrl.replace(/\d/g, matched => params[matched - 1])
}
