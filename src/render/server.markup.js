'use strict'

export default function ( htmlMarkup ) {
	return `<!doctype>
<html>
<head>
	<title>React Real Estate Investment</title>
</head>
<body>
	<div id='root'>${htmlMarkup}</div>
	<script type='text/javascript' src='/dist/vendor.bundle.js'></script>
	<script type='text/javascript' src='/dist/app.bundle.js'></script>
</body>
</html>`
}