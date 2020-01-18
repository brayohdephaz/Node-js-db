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
var sql = "INSERT INTO customers (name, email) VALUES ?";
var values =[
	['Antony Ngugi', 'ngugiantony@mail.org'],
	['Alice Kawira', 'alice@mail.com'],
	['Austine Kirimi', 'kirimiaustine@yahoo.com'],
		['Brenda Nyawira', 'brendanyawi@mail.org'],
	['Brandon Mwaki', 'bm.mwaki@mail.com'],
	['Britney Karembo', 'karembobrit@yahoo.com'],
]
	con.query(sql,[values], function(err, result){
		if(err) throw err;
		console.log("Records Inserted: "+ result.affectedRows);
	});
});