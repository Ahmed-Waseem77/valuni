
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

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:19006');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


var con = mysql.createConnection
({
  host: "zrp.h.filess.io",
  user: "valuni_ropethird",
  password: "050941bdad080ca74329ca3543b680010525525b",
  database: "valuni_ropethird", 
  port: 3305
}); 


var email = "\"sarah.yassin@aucegypt.edu\" " ;

var sql =
"SELECT C.CRN, C.Engaging, C.Support, C.ContentQuality, C.Difficulty, C.Grading, C.Workload, I.First_Name, I.Last_Name, I.Grading, I.TeachingStyle, I.Flexibility, I.Availability " + 
"FROM Users U INNER JOIN Take T ON U.Email = T.User_Email " +
"INNER JOIN Courses C ON T.CRN = C.CRN " +
"INNER JOIN Teach Te ON C.CRN = Te.CRN " +
"INNER JOIN Instructors I ON Te.Inst_ID = I.ID " + 
"WHERE U.Major = C.Major AND U.Email = " + email +
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
// API: get course 
// Method: GET
//gets the first 10 courses in the database
//does not take any parameters
app.get("/getCourses", function (req, res) {
  // Get the email from the request parameters
  const email = req.query.email;

  // Check if email is provided
  if (!email) {
    return res.status(400).send("Email is required");
  }

  var sql =
    "SELECT C.CRN, C.Engaging, C.Support, C.ContentQuality, C.Difficulty, C.Grading, C.Workload, I.First_Name, I.Last_Name, I.Grading, I.TeachingStyle, I.Flexibility, I.Availability " +
    "FROM Users U INNER JOIN Take T ON U.Email = T.User_Email " +
    "INNER JOIN Courses C ON T.CRN = C.CRN " +
    "INNER JOIN Teach Te ON C.CRN = Te.CRN " +
    "INNER JOIN Instructors I ON Te.Inst_ID = I.ID " +
    "WHERE U.Major = C.Major AND U.Email = ? " +  // Use a placeholder for email
    "LIMIT 5;";

  // Use prepared statement to avoid SQL injection
  con.query(sql, [email], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Course fetched");
    res.send(result);
  });
});
