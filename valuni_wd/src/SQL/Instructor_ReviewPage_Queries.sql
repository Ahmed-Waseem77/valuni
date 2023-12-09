-- To get the review content
SELECT R.User_Major, R.RText, R.Semester, C.CName, R.Availability, R.Flexibility, R.TeachingStyle, R.Grading, R.Engaging, R.Support, R.ContentQuality, R.Difficulty, R.Workload
FROM Review R INNER JOIN Courses C 
ON R.CRN = C.CRN
WHERE R.Inst_ID = '%';

-- To get instructor info and ratings

SELECT First_Name, Last_Name, Grading, TeachingStyle, Flexibility, Availability, Department
FROM Instructors
WHERE ID = '%'; 

-- To get instructors courses

SELECT C.CName
FROM Instructors I INNER JOIN Teach T 
ON T.Inst_ID = I.ID INNER JOIN Courses C
ON T.CRN = C.CRN
WHERE I.ID = '%'; 