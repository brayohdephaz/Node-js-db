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
	//ALTER TABLE
var sql = "SELECT * FROM customers";

	con.query(sql, function(err, result, fields){
		if(err) throw err;
		var i;
		for(i = 0; i < result.length; i++){
			console.log(result[i].name + " | " + result[i].email);
		};
		
		//To be specific use the array index[0]
		//print names only(results.name)
	});
});