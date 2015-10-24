'use strict'

import express from "express"
import { Server } from "http"

import { APPLICATION_PORT } from "../config"


var app = express()
var appserver = Server(app)

app.get("/*", ( req, res, next ) => {
	console.log("main universal server routing point")
	res.sendStatus(200)
})

appserver.listen(APPLICATION_PORT, () => {
	console.log(`app listening to on 0.0.0.0:${APPLICATION_PORT}`)
})