const {rules: npmPackageJsonLint} = require('npm-package-json-lint-config-default')
const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


exports.config = {
  default: {
    'npm-package-json-lint': npmPackageJsonLint
  },
  recommended: {
    'npm-check-updates': ['error', {
      errorLevel: 2,
      semverLevel: 'major'
    }],
    'npm-package-json-lint': npmPackageJsonLint
  }
}

exports.rules = rules