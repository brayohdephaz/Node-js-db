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
	//WHERE CLAUSE
	var name_search = 'b%';
	var id_search = 1;
var sql = "SELECT * FROM customers ORDER BY name";

	con.query(sql,[name_search, id_search], function(err, result){
		if(err) throw err;
			console.log(result);
		
	});
});