'use strict'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotReloader from 'webpack-hot-middleware'

import webpackConfig from "../../webpack.dev.config"

var compiler = webpack(webpackConfig)

export default function initDevelopmentFeatures ( app ) {

	compiler.plugin('done', function() {
		console.log("Clearing /src/ module cache from server")
		Object.keys(require.cache).forEach(function(id) {
			if (/\/src\//.test(id)) {
				delete require.cache[id]
			}
		})
	})

	app.use( webpackDevMiddleware(compiler, {
		noInfo: true, 
		headers: { "X-Custom-Header": "yes" },
		publicPath: webpackConfig.output.publicPath,
		stats : {
			colors : true
		}
	}))

	app.use( require("webpack-hot-middleware")(compiler) )
}