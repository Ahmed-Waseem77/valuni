var mysql = require('mysql2');

var con = mysql.createConnection
({
            host: "localhost",
            user: "root",
            password: "Heggi_2002",
            database: "VALUNI"
});
var sql =
    "SELECT C.CRN, C.Rating, I.First_Name, I.Last_Name " +
    "FROM Teach T " +
    "INNER JOIN Courses C ON T.CRN = C.CRN " +
    "INNER JOIN Instructors I ON T.Inst_ID = I.ID " +
    "WHERE I.First_Name IN ('Sally', 'Cherif', 'Hossam') " +
    "GROUP BY 1, 2, 3, 4 " +
    "LIMIT 5;";

con.connect(function(err)
{
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result)
    {
        if (err) throw err;
        console.log("Result: " + result);
        con.end();
    });
});

