const {join} = require('path')
const {promisify} = require('util')

const gitSemverTags = require('git-semver-tags')
const npmConf = require('npm-conf')


// Check against user defined default version, used when creating new projects
const initVersion = npmConf().get('init-version')


exports.fetch = function({config})
{
  return promisify(gitSemverTags)(config)
}

exports.evaluate = function({context: {projectRoot}, fetch: {result: {length}}})
{
  // Check if there are git tags with versions to prevent false positives
  if(length) return

  return require(join(projectRoot, 'package.json')).version === initVersion
}
