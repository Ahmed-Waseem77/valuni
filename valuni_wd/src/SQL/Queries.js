
const fs = require("fs");
var mysql = require('mysql2');
const express = require('express'); 
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3005;
const app = express();
app.use(cors());

app.use(bodyParser.json());

var con = mysql.createConnection
({
            host: "db4free.net",
            user: "vauni_auc",
            password: "Sallyvaluni",
            database: "valuni_auc"
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
// API: get course
// Method: GET
app.get("/getCourse", function (req, res) {
  var q = url.parse(req.url, true).query;
  const crn = q.crn; // Use crn instead of username

  var sql = "SELECT * FROM Courses WHERE CRN = ?";

  connection.query(sql, crn, function (err, result) {
    if (err) {
      res.send("0");
      throw err;
    }

    console.log("Course fetched");
    res.send(result);
  });
});
