'use strict'

import express from "express"
import { Server } from "http"
import path from "path"

import { APPLICATION_PORT } from "../config"

const env = process.env.NODE_ENV || 'development'

var app = express()
var appserver = Server(app)

app.set("env", env)

app.use(express.static(path.resolve('../dist')))

if ( env === 'development' ) {
	require("./development")(app)
}

app.get("/*", (req, res, next) => {
	require("../src/render/server")(req,res,next)
})

appserver.listen(APPLICATION_PORT, () => {
	console.log(`app listening to on 0.0.0.0:${APPLICATION_PORT}`)
})