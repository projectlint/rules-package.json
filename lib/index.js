const npmPackageJsonLint = require('npm-package-json-lint-config-default')
const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


const npmPackageJsonLint_recommended =
{
  ...npmPackageJsonLint,
  "require-author": "error",
  "require-bugs": "error",
  "require-description": "error",
  "require-homepage": "error",
  "require-license": "error",
  "require-repository": "error",
  "require-scripts": "error",
  "no-repeated-dependencies": "error",
  "no-absolute-version-dependencies": "error",
  "no-file-dependencies": "error",
  "prefer-alphabetical-dependencies": "error",
  "no-absolute-version-devDependencies": "error",
  "no-file-devDependencies": "error",
  "prefer-alphabetical-devDependencies": "error",
  "prefer-alphabetical-bundledDependencies": "error",
  "prefer-alphabetical-optionalDependencies": "error",
  "prefer-alphabetical-peerDependencies": "error",
  "prefer-alphabetical-scripts": "error",
  "prefer-property-order": "warning",
  "no-duplicate-properties": "error",
  "prefer-no-engineStrict": "error"
}


exports.config = {
  default: {
    'npm-package-json-lint': ['error', npmPackageJsonLint]
  },
  recommended: {
    'has default version': 'warning',
    'npm-check-updates': {
      'error': {errorLevel: 2, semverLevel: 'major'},
      'warning': {errorLevel: 2}
    },
    'npm-package-json-lint': ['error', npmPackageJsonLint_recommended]
  },
  strict: {
    'has default version': 'warning',
    'npm-check-updates': {
      'error': {errorLevel: 2}
    },
    'npm-package-json-lint': ['error', {
      ...npmPackageJsonLint_recommended,
      'require-contributors': 'error',
      'require-engines': 'error',
      'require-keywords': 'error',
      'require-main': 'error',
      'require-private': 'error',
      'no-archive-dependencies': 'error',
      'no-git-dependencies': 'error',
      'prefer-no-version-zero-dependencies': 'error',
      'no-archive-devDependencies': 'error',
      'no-git-devDependencies': 'error',
      'prefer-no-version-zero-devDependencies': 'error'
    }]
  }
}

exports.rules = rules
