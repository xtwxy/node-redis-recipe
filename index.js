var http = require("http");
var app = require("./lib/app");

/* assemble the request handles here to form the application. */
require("./lib/redis_slogan");


http.createServer(app).listen(9080);

