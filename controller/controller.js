var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : 'vidhya567',
  database : 'Middleware'
});

connection.connect()

exports.login = function(req, res){
	// console.log(req.body);
	var email = req.body.email;
	var pass = req.body.password;
	var queryDB = "SELECT * from LoginDetails where email='"+email+"' and password='"+pass+"'";
	console.log(queryDB);
	connection.query("SELECT * from LoginDetails where email='"+email+"' and password='"+pass+"'", function (err, rows, fields) {
	  	if (err) throw err
	  	// console.log(err);
	  	// console.log('The solution is: ', rows[0].name);
	  	res.send(rows[0].name);
	});	
	connection.end()
};