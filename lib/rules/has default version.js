const {join} = require('path')

const npmConf = require('npm-conf')


// Check against user defined default version, used when creating new projects
const initVersion = npmConf().get('init-version')


exports.evaluate = function({context: {projectRoot}})
{
  // TODO: check if there are git tags with versions to prevent false positives
  return require(join(projectRoot, 'package.json')).version === initVersion
}
