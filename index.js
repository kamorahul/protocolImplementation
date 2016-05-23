var server = require("net");


server.createSever(function(connection){
	connection.on("data",function  (data) {
		console.log("data >> >> "+ JSON.stringify(data))
	})
}).listen(3000)