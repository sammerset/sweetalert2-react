import webpackServe from 'webpack-serve'
import chokidar from 'chokidar'
import appRootDir from 'app-root-dir'
import { resolve as pathResolve } from 'path'
import { log, promisify } from './utils'

const serve = () => {
  const webpackConfigFactory = require('../webpack.configFactory')
  const webpackConfig = webpackConfigFactory(process.env.APP_MODE)
  return webpackServe({
    config: webpackConfig,
    content: pathResolve(appRootDir.get(), 'docs-site')
  })
}

serve().then(initialServer => {
  let devServer = initialServer
  const watcher = chokidar.watch([
    pathResolve(appRootDir.get(), 'webpack.configFactory.js'),
    pathResolve(appRootDir.get(), 'package.json'),
    pathResolve(appRootDir.get(), 'yarn.lock')
  ])

  watcher.on('ready', () => {
    watcher.on('change', () => {
      log({
        title: 'webpack',
        level: 'warn',
        message: 'Restarting the development devServer...'
      })
      const closeAsync = promisify(devServer.close)
      closeAsync()
        .then(() => serve())
        .then(newServer => {
          devServer = newServer
        })
        .catch(e => {
          log({
            title: 'webpack',
            level: 'error',
            message: `Error in promise: ${e}`
          })
        })
    })
  })
})
