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


module.fix = function({projectRoot}, dependencies, options)
{
  return exec(projectRoot, options, true)
}

module.run = function({projectRoot}, dependencies, options)
{
  return exec(projectRoot, options)
}
