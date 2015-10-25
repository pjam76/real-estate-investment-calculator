import React from "react"
import { renderToString } from "react-dom/server"
import {Provider} from "react-redux"

import AddInvestment from "../containers/add-investment-form"

import configureStore from "../store"


import markupFn from "./server.markup"


export default function universalServerRenderer ( req, res, next ) {	

	var store = configureStore()
	
	var reactHTMLString = renderToString(<Provider store={store}><AddInvestment/></Provider>)

	res.status(200).send(markupFn(reactHTMLString))
}