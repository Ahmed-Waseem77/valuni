
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
  host: "db4free.net",
  user: "vauni_auc",
  password: "Sallyvaluni",
  database: "valuni_auc", 
  port: 3306
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
// Endpoint to get review content
// Method: GET
app.get("/getReviewContent/:crn", function (req, res) {
  const crn = req.params.crn;

  const sql =
    "SELECT R.User_Major, R.RText, R.Semester, I.First_Name, I.Last_Name, R.Availability, R.Flexibility, R.TeachingStyle, R.Grading, R.Engaging, R.Support, R.ContentQuality, R.Difficulty, R.Workload " +
    "FROM Review R INNER JOIN Instructors I ON R.Inst_ID = I.ID " +
    "WHERE R.CRN = ?";

  con.query(sql, [crn], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Review content fetched");
    res.send(result);
  });
});

// Endpoint to get course info and ratings
// Method: GET
app.get("/getCourseInfo/:crn", function (req, res) {
  const crn = req.params.crn.replace(/%20/g, ' ');
  const sql =
    "SELECT CName, Engaging, Support, ContentQuality, Difficulty, Grading, Workload, CDescription " +
    "FROM Courses " +
    "WHERE CRN = ?";

  con.query(sql, [crn], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Course info and ratings fetched");
    res.send(result);
  });
});

// Endpoint to get course instructors
// Method: GET
app.get("/getCourseInstructors/:crn", function (req, res) {
  const crn = req.params.crn;

  const sql =
    "SELECT I.First_Name, I.Last_Name " +
    "FROM Courses C INNER JOIN Teach T ON C.CRN = T.CRN INNER JOIN Instructors I ON T.Inst_ID = I.ID " +
    "WHERE C.CRN = ?";

  con.query(sql, [crn], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Course instructors fetched");
    res.send(result);
  });
});

app.post('/insertReview', (req, res) => {
  const { User_Major, RText, User_Email, Semester, CRN, Grading, Workload, Difficulty, Support } = req.body;

  const sql = 'INSERT INTO Review (User_Major, RText, User_Email, Semester, CRN, Grading, Workload, Difficulty, Support) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql, [User_Major, RText, User_Email, Semester, CRN, Grading, Workload, Difficulty, Support], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Review inserted successfully' });
    }
  });
});
