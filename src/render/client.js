'use strict'

import React from 'react'
import ReactDom from 'react-dom'

import AddInvestment from "../containers/add-investment-form"

import {Provider} from "react-redux"

import configureStore from "../store"

var store = configureStore( window.__initialState__)

ReactDom.render(<Provider store={store}><AddInvestment/></Provider>, document.getElementById("root"))