const {join} = require('path')

const nv = require('@pkgjs/nv')
const {Failure} = require('@projectlint/projectlint')


exports.fetch = function({config, context: {projectRoot}})
{
  const {engines} = require(join(projectRoot, 'package.json'))
  if(!engines)
    throw new Failure("`package.json` file don't have an `engines` field")

  const {node} = engines
  if(!node)
    throw new Failure("Node.js engine not defined in `package.json` file")

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
    case 'lts'       : return (!lts                            ) && `Node.js version '${version}' is not a LTS`
    case 'lts_active': return (!lts || now < lts   || end < now) && `Node.js version '${version}' is not an active LTS`
    case 'maintained': return (        now < start || end < now) && `Node.js version '${version}' is not maintained`

    default: throw new SyntaxError(`Unknown status '${status}'`)
  }
}
