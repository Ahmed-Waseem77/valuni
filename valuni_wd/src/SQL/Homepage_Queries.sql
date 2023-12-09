
SELECT C.CRN, C.Engaging, C.Support, C.ContentQuality, C.Difficulty, C.Grading, C.Workload, I.First_Name, I.Last_Name, I.Grading, I.TeachingStyle, I.Flexibility, I.Availability
FROM Users U INNER JOIN Take T ON U.Email = T.User_Email
INNER JOIN Courses C ON T.CRN = C.CRN 
INNER JOIN Teach Te ON C.CRN = Te.CRN
INNER JOIN Instructors I ON Te.Inst_ID = I.ID 
WHERE U.Major = C.Major AND U.Email = "sarah.yassin@aucegypt.edu"
Limit 5;

-- 

SELECT C.CRN, C.Engaging, C.Support, C.ContentQuality, C.Difficulty, C.Grading, C.Workload, I.First_Name, I.Last_Name, I.Grading, I.TeachingStyle, I.Flexibility, I.Availability  
FROM Courses C INNER JOIN Teach T ON T.CRN = C.CRN
INNER JOIN Instructors I ON T.Inst_ID = I.ID 
WHERE C.Major = 
				(SELECT Major 
                FROM Users
                WHERE Email = "sarah.yassin@aucegypt.edu")
LIMIT 5;