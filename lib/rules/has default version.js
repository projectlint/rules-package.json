const {join} = require('path')


exports.evaluate = function({projectRoot}, dependencies, config)
{
  // TODO: check against user defined default version for new projects
  // TODO: check if there are git tags with versions to prevent false positives
  return require(join(projectRoot, 'package.json')).version === '1.0.0'
}
