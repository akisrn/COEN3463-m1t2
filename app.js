var connect = require("connect");

var app = connect.createServer().use(connect.static(__dirname + '/Public'));

app.listen(8180);