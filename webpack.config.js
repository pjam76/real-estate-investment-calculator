'use strict'

const env = process.env.NODE_ENV || "development"

import webpack from 'webpack'
import path from 'path'

import { CLIENT_ENTRY_POINT, CLIENT_DESTINATION_PATH, VENDOR_LIST } from "./config"

var plugins = [
	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
]

var devtool = null

var entries = {
	app : [ CLIENT_ENTRY_POINT ],
	vendor : VENDOR_LIST
}

// es7-6 and jsx transpiler to es5
var babelLoader = {
	test: /\.js$/,
	loader: 'babel',
	exclude: [
		path.resolve(__dirname, 'node_modules')
	]
}

var webpackConfig = {
	target: 'web',

	entry : entries,

	plugins : plugins,

	module : {
		loaders : [ babelLoader ]
	},

	resolve: {
		extensions: [ '', '.jsx', '.js', 'es6' ],
		modulesDirectories: [ 'node_modules' ]
	},

	output: {
		path: CLIENT_DESTINATION_PATH,
		// desitnation folder for development middleware and hot realoding
		publicPath : "/dist/",
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js',
		sourceMapFilename : "[file].map"
	}
}

export default webpackConfig