
-- Insert into courses Review
INSERT INTO Review VALUES (User_Major, RText, User_Email, Semester, CRN, Grading, Workload, Difficulty, Support);

-- Insert into instructor review
INSERT INTO Review VALUES (User_Major, RText, User_Email, Semester, CRN, Inst_ID, Grading, Workload, Difficulty, Support);

-- to get CRN
SELECT CRN FROM Courses
WHERE CName = '%';

-- to get Inst_ID
SELECT ID FROM Instructors
WHERE First_Name = '%' AND Last_Name = '%'