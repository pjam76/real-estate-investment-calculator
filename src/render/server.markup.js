'use strict'

export default function ( htmlMarkup ) {
	return `<!doctype>
<html>
<head>
	<title>React Real Estate Investment</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
</head>
<body>
	<div id='root'>${htmlMarkup}</div>
	<script type='text/javascript' src='/dist/vendor.bundle.js'></script>
	<script type='text/javascript' src='/dist/app.bundle.js'></script>
</body>
</html>`
}