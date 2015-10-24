'use strict'

import express from "express"
import { Server } from "http"

import { APPLICATION_PORT } from "../config"


var app = express()
var appserver = Server(app)

import universalServerRenderer from "../src/renderers/server.renderer"

app.get("/*", universalServerRenderer )

appserver.listen(APPLICATION_PORT, () => {
	console.log(`app listening to on 0.0.0.0:${APPLICATION_PORT}`)
})