import React from "react"
import { renderToString } from "react-dom/server"

import Dummy from "../containers/dummy"

import markupFn from "./server.markup"

export default function universalServerRenderer ( req, res, next ) {

	var reactHTMLString = renderToString(<Dummy/>)

	res.status(200).send(markupFn(reactHTMLString))
}