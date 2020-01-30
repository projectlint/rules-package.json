const {join} = require('path')

const nv = require('@pkgjs/nv')


exports.fetch = function({config, context: {projectRoot}})
{
  const {node} = require(join(projectRoot, 'package.json')).engines

  return nv(node, config)
  .then(function(versions)
  {
    return versions[0]
  })
}

exports.evaluate = function({config: {status}, fetch: {result: {end, lts, start}}})
{
  const now = new Date()

  switch(status)
  {
    case 'lts'       : return (!lts                            ) && 'Not a LTS'
    case 'lts_active': return (!lts || now < lts   || end < now) && 'Not an active LTS'
    case 'maintained': return (        now < start || end < now) && 'Not maintained'

    default: throw SyntaxError(`Unknown status '${status}'`)
  }
}
