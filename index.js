var server = require("net");


server.on("connection",function(socket){
	socket.on("data",function  (data) {
		console.log("data >> >> "+ JSON.stringify(data))
	})
})