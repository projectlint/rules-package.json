const {join} = require('path')

const {run} = require('npm-check-updates')


module.run = function({projectRoot}, dependencies, options)
{
  return run({
    packageFile: join(projectRoot, 'package.json'),
    ...options
  })
}
