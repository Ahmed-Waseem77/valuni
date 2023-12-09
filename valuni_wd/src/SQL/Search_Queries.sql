
SELECT CRN
FROM Courses 
WHERE CRN LIKE '%' OR CName LIKE '%'
LIMIT 6;

-- 

SELECT Last_Name, First_Name
FROM Instructors
WHERE Last_Name LIKE '%' OR First_Name LIKE '%'
LIMIT 6;
