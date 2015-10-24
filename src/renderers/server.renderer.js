import React from "react"
import { renderToString } from "react-dom/server"

import Dummy from "../containers/dummy"

export default function universalServerRenderer ( req, res, next ) {

	var reactHTMLString = renderToString(<Dummy/>)

	console.log("htmlString\n",reactHTMLString)

	res.status(200).send(reactHTMLString)
}