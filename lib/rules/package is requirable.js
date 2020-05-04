exports.fetch = function({projectRoot})
{
  return require(projectRoot)
}

exports.evaluate = function({fetch: {result}})
{
  // Accidentally exporting nothing
  if(result === undefined) return true

  // Exporting default empty object
  if(result.constructor.name === 'Object' && !Object.keys(result).length)
    return true
}
