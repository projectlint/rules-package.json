const {join, promises: {stat}} = require('fs')

const {Failure} = require('@projectlint/projectlint')


function uselessIndex(path)
{
  throw new Failure(`Useless '${path}' value for 'main' field, remove it`)
}


exports.fetch = function({context: {projectRoot}})
{
  return require(join(projectRoot, 'package.json')).main
}

exports.evaluate = function({context: {projectRoot}, fetch: {result}})
{
  if(result === undefined) return

  const path = result.split('/')

  if(path.length <= 2)
  {
    switch(path[0])
    {
      case 'lib':
        switch(path[1])
        {
          case 'index.js':
            throw new Failure('Explicit `lib/index.js` value for `main` field, '
                            + 'use `lib` instead')

          case 'index.json':
            return stat(join(projectRoot, 'lib', 'index.js'))
            .catch(uselessIndex('lib/index.json'))

          case 'index.node':
            return Promise.any([
              stat(join(projectRoot, 'lib', 'index.js')),
              stat(join(projectRoot, 'lib', 'index.json'))
            ])
            .catch(uselessIndex('lib/index.node'))
        }

      case 'index.js':
        // Warning about using default value (strict mode?)
        throw new Failure('Explicit `index.js` default value for `main` field, '
                        + 'remove the `main` field instead')

      case 'index.json':
        return stat(join(projectRoot, 'index.js'))
        .catch(uselessIndex('index.json'))

      case 'index.node':
        return Promise.any([
          stat(join(projectRoot, 'index.js')),
          stat(join(projectRoot, 'index.json'))
        ])
        .catch(uselessIndex('index.node'))
    }
  }

  return new Failure(`Non standard '${result}' value for 'main' field`)
}

// exports.fix = function()
// {

// }
