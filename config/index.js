'use strict'

import path from "path"

export const APPLICATION_PORT = 3333
export const API_PORT = 9999

export const CLIENT_ENTRY_POINT = path.resolve("./src/render/client.js")
export const CLIENT_DESTINATION_PATH = path.resolve("./dist")

export const VENDOR_LIST = [
	'react',
	'react-dom'
]