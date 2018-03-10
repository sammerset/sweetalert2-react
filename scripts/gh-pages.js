import webpack from 'webpack'
import appRootDir from 'app-root-dir'
import { resolve as pathResolve } from 'path'
import webpackConfigFactory from '../webpack.configFactory'
import { log } from './utils'

const webpackConfig = webpackConfigFactory(process.env.APP_MODE)
console.log('webpack config: ', webpackConfig)
const compiler = webpack(webpackConfig)
// console.log('compiler', compiler)

