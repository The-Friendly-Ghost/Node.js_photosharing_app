const	http = require('http');
const	server = http.createServer (
	(request, response) => {
		if (request.url == '/about')
			response.end('The about page');
		else if (request.url == '/login')
			response.end('The login page');
		else if (request.url == '/logout')
			response.end('Log out!');
		else
		{
			response.writeHead(404);
			response.end('Page not Found');
		}
	}
)
server.listen(8080)
console.log("Listening on port 8080");