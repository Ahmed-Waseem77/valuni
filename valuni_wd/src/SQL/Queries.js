
const fs = require("fs");
var mysql = require('mysql2');
const express = require('express'); 
const jsonfile = require('jsonfile');
const port = 3005;
const app = express();


var con = mysql.createConnection
({
            host: "localhost",
            user: "weso",
            password: "ahmed_2003",
            database: "valuni"
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
        app.get('/data', (req, res) => {
          const data = {
            result
          };

          res.status(200).json(data);
        }); 
        if (err) throw err;
        console.log("Result: " + result); 
        

        const filename = 'data.json';

        jsonfile.writeFile(filename, result, { spaces: 2 }, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Data written successfully');
          }
        });

        con.end();
    });
}); 


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 


