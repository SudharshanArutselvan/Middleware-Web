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
	  	if (err){ console.log(err);}
	  	// console.log(err);
	  	// console.log('The solution is: ', rows[0].name);
		else{
	  		console.log(rows[0]);
			if(rows.length == 0) res.redirect('/');
			else res.redirect('/dashboard');
			//res.send(rows[0].name);
			//return;
		}
	});	
	//connection.end();
	
};

exports.create = function(req,res){
	var email = req.body.email;
	var pass = req.body.password;
	var username=req.body.username;
	var insertDB = "INSERT INTO LoginDetails (email,password,name) VALUES (\""+email+"\",\""+pass+"\",\""+username+"\")";
	console.log(insertDB);
	connection.query(insertDB,function(err,result){
		if(err) throw err
		//console.log("Login details inserted");
		else {
		res.redirect('/dashboard');}
	});
	
};
