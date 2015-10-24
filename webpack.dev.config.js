import webpack from "webpack"
import webpackConfig from "./webpack.config"


// extend entries

var entries = Object.assign({}, webpackConfig.entry)
entries.app = ['webpack-hot-middleware/client', ...entries.app]

// extend babel loader
var modules = Object.assign({}, webpackConfig.module)
var loaders =[...webpackConfig.module.loaders]
modules.loaders = loaders

var babelLoader = Object.assign({}, webpackConfig.module.loaders[0])

babelLoader.query = {
	optional: ['runtime'],
	plugins: [
		'react-display-name',
		'react-transform'
	],
	extra: {
		"react-transform": {
			transforms : [{
				transform: 'react-transform-hmr',
				imports: ['react'],
				locals: ['module']
			}]
		}
	}
}

modules.loaders[0] = babelLoader

// extend plugins

var plugins = Object.assign({}, webpackConfig.plugins)

plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    ...plugins
]

var webpackDevConfig = Object.assign({}, webpackConfig, {

	// attach inlsine soruce maps
	devTool : '#inline-source-map',

	// attach hot reaload in app bundle
	entry : entries,

	module : modules,

	plugins : plugins

})

export default webpackDevConfig