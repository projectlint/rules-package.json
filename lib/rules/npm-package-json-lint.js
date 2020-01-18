const {NpmPackageJsonLint} = require('npm-package-json-lint')


function exec(cwd, config, fix)
{
  const options = {config, cwd, fix, patterns: [cwd]}

  const npmPackageJsonLint = new NpmPackageJsonLint(options)

  const {issues} = npmPackageJsonLint.lint().results[0]

  return issues.length && issues
}


exports.fix = function({config, context: {projectRoot}})
{
  return exec(projectRoot, config, true)
}

exports.evaluate = function({config, context: {projectRoot}})
{
  return exec(projectRoot, config)
}
