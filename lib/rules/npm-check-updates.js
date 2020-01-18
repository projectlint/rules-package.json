const {join} = require('path')

const {run} = require('npm-check-updates')


function exec(projectRoot, options, upgrade)
{
  return run({
    packageFile: join(projectRoot, 'package.json'),
    ...options,
    upgrade
  })
}


exports.fix = function({config, context: {projectRoot}})
{
  return exec(projectRoot, config, true)
}

exports.evaluate = function({config, context: {projectRoot}})
{
  return exec(projectRoot, config)
}
