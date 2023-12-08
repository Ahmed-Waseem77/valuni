-- To get the review content
SELECT R.User_Major, R.RText, R.Semester, I.First_Name, I.Last_Name, R.Availability, R.Flexibility, R.TeachingStyle, R.Grading, R.Engaging, R.Support, R.ContentQuality, R.Difficulty, R.Workload
FROM Review R INNER JOIN Instructors I 
ON R.Inst_ID = I.ID
WHERE R.CRN = '%';

-- To get course info and ratings

SELECT CName, Engaging, Support, ContentQuality, Difficulty, Grading, Workload, CDescription
FROM Courses
WHERE CRN = '%'; 

-- To get course instructors

SELECT I.First_Name, I.Last_Name
FROM Courses C INNER JOIN Teach T 
ON C.CRN = T.CRN INNER JOIN Instructors I
ON T.Inst_ID = I.ID
WHERE C.CRN = '%'; 