const {Failure} = require('@projectlint/projectlint')


exports.evaluate = function({projectRoot})
{
  const {devDependencies, husky} = require(join(projectRoot, 'package.json'))

  if(!devDependencies.husky) throw new Failure('`husky` is not installed')
  if(!husky) throw new Failure('`husky` git hooks are not configured')
  if(!husky['pre-commit']) throw new Failure('`pre-commit` git hook is not defined')
  if(!husky['pre-push']) throw new Failure('`pre-push` git hook is not defined')
}

// exports.fix = function()
// {
//   // Install husky

//   // Config git hooks
// }
