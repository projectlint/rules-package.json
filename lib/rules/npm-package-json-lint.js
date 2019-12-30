const {NpmPackageJsonLint} = require('npm-package-json-lint')


module.run = function({projectRoot: cwd}, dependencies, config)
{
  const npmPackageJsonLint = new NpmPackageJsonLint({config, cwd})

  return npmPackageJsonLint.lint().results[0].issues
}