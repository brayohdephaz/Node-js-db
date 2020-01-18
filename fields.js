var mysql = require('mysql');

//create a connection

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database:"nodedb",//This shows the current database
})

//connect to mysql

con.connect(function(err){
	if(err) throw err;
	console.log("Connected to database");
	//SELECT SPECIFIC DATA TABLE
var sql = "SELECT * FROM customers";

	con.query(sql, function(err, result, fields){
		if(err) throw err;
			console.log(fields[0].name + " | " + fields[1].name);//gives name of columns and its details
			console.log("..........." + " " + "...........");
			var i;
			for (var i = 0; i < result.length; i++) {
				console.log(result[i].name + " | " + result[i].email);
			};

			

	});
});