-- MySQL dump 10.13  Distrib 8.1.0, for macos13 (x86_64)
--
-- Host: localhost    Database: VALUNI
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Courses`
--

DROP TABLE IF EXISTS `Courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Courses` (
  `CRN` varchar(30) NOT NULL,
  `Major` varchar(100) NOT NULL,
  `CDescription` text,
  `Credit_Hours` int NOT NULL,
  `Engaging` decimal(2,1) DEFAULT NULL,
  `Support` decimal(2,1) DEFAULT NULL,
  `ContentQuality` decimal(2,1) DEFAULT NULL,
  `Difficulty` decimal(2,1) DEFAULT NULL,
  `Grading` decimal(2,1) DEFAULT NULL,
  `Workload` decimal(2,1) DEFAULT NULL,
  `CName` varchar(100) NOT NULL,
  PRIMARY KEY (`CRN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES ('CSCE 000/1102','Computer Engineering',NULL,1,1.3,2.0,1.2,1.2,3.0,3.0,'Fundamentals of Computing II Lab'),('CSCE 000/2203','Computer Engineering',NULL,1,4.7,5.0,2.5,4.6,3.0,3.2,'Analysis and Design of Algorithms Lab'),('CSCE 000/2211','Computer Engineering',NULL,3,3.3,4.7,4.5,1.2,3.1,4.3,'Applied Data Structures'),('CSCE 000/3402','Computer Engineering',NULL,1,3.9,1.2,3.0,2.0,4.2,3.0,'Operating Systems Lab'),('CSCE 000/4303','Computer Engineering',NULL,3,3.0,3.1,3.4,2.0,3.5,4.5,'Embedded Systems on Chip Design'),('CSCE 000/4315','Computer Engineering',NULL,3,2.0,3.6,4.2,3.1,3.2,2.6,'Internet of Things Networking Protocols'),('CSCE 000/4603','Computer Engineering',NULL,3,4.3,5.0,3.4,1.2,4.2,4.5,'Fundamentals of Computer Vision'),('CSCE 000/4604','Computer Engineering',NULL,3,2.3,2.2,3.2,2.3,3.2,3.2,'Practical Machine Deep Learning'),('CSCE 000/5243','Computer Engineering',NULL,3,2.3,3.2,3.2,4.8,4.8,3.5,'Information and System Security'),('CSCE 000/5245','Computer Engineering',NULL,3,1.2,2.4,2.3,3.2,3.2,2.7,'Embedded Real-Time Systems'),('CSCE 102/1000','Computer Engineering',NULL,2,3.5,3.0,3.2,4.3,2.8,4.0,'Introduction to Computers and their Applications'),('CSCE 106/1001','Computer Engineering',NULL,3,3.2,4.1,4.2,2.3,5.0,3.0,'Fundamentals of Computing I'),('CSCE 110/1101','Computer Engineering',NULL,3,3.2,3.0,3.1,2.2,2.4,4.1,'Fundamentals of Computing II'),('CSCE 201/2502','Computer Engineering',NULL,2,1.9,2.4,3.0,3.0,2.0,3.5,'Information Technology'),('CSCE 230/2301','Computer Engineering',NULL,3,2.3,3.0,2.0,2.5,3.0,4.8,'Digital Design I'),('CSCE 231/2303','Computer Engineering',NULL,3,2.2,3.0,4.1,2.0,3.0,4.7,'Computer Organization and Assembly Language Programming'),('CSCE 239L/2302','Computer Engineering',NULL,1,2.0,2.5,3.0,3.0,4.1,2.8,'Digital Design I Lab '),('CSCE 253/2501','Computer Engineering',NULL,3,1.2,2.0,3.0,3.0,2.0,3.5,'Fundamentals of Database Systems '),('CSCE 315/3101','Computer Engineering',NULL,3,4.1,3.4,3.5,2.3,2.2,2.5,'Programming Language'),('CSCE 316/3102','Computer Engineering',NULL,3,3.2,2.3,2.8,4.6,3.1,3.5,'Programming in Java'),('CSCE 317/3103','Computer Engineering',NULL,3,4.6,4.3,4.1,2.5,2.6,3.2,'Object Oriented Programming'),('CSCE 321/2202','Computer Engineering',NULL,3,4.5,3.0,3.0,3.4,2.5,2.0,'Analysis and Design of Algorithms'),('CSCE 325/3104','Computer Engineering',NULL,3,1.4,2.5,2.2,4.1,3.2,3.1,'Concepts of Programming Languages'),('CSCE 330/3301','Computer Engineering',NULL,3,4.2,3.0,1.6,3.0,3.5,2.8,'Computer Architecture'),('CSCE 332/3303','Computer Engineering',NULL,3,3.1,1.2,1.2,4.2,4.2,2.0,'Fundamental Microelectronics'),('CSCE 333/3311','Computer Engineering',NULL,3,2.3,2.4,3.4,3.5,3.6,3.6,'Data and Computer Communications'),('CSCE 337/3304','Computer Engineering',NULL,3,3.4,3.4,3.2,2.5,2.4,2.4,'Digital Design II '),('CSCE 339L/3302','Computer Engineering',NULL,1,4.5,2.0,3.0,2.0,3.6,5.0,'Computer Architecture Lab'),('CSCE 341/3701','Computer Engineering',NULL,3,4.7,4.5,1.2,3.4,4.5,2.0,'Software Engineering'),('CSCE 342/3421','Computer Engineering',NULL,3,3.4,3.4,2.0,4.5,3.5,2.5,'Fundamentals of Computing and Communication Systems'),('CSCE 345/3401','Computer Engineering',NULL,3,2.3,3.0,2.5,3.0,1.5,2.4,'Operating Systems'),('CSCE 346/3422','Computer Engineering',NULL,3,1.2,1.3,3.0,3.5,4.1,3.0,'Introduction to Information Security'),('CSCE 363/3611','Computer Engineering',NULL,3,2.4,3.0,2.3,3.0,3.0,4.1,'Digital Signal Processing'),('CSCE 401/4503','Computer Engineering',NULL,3,4.1,3.2,2.4,2.7,3.2,2.0,'Internet-based Information Systems'),('CSCE 422/4201','Computer Engineering',NULL,3,1.2,1.9,4.6,4.2,3.4,3.5,'Theory of Computing '),('CSCE 427/4602','Computer Engineering',NULL,3,3.4,2.4,5.0,4.5,4.1,1.8,'Introduction to Artificial Neural Networks'),('CSCE 432/4301','Computer Engineering',NULL,3,3.6,2.0,4.3,4.1,2.0,3.4,'Embedded Systems'),('CSCE 435/3312','Computer Engineering',NULL,3,4.3,1.5,3.1,3.2,1.5,1.5,'Computer Networks'),('CSCE 436L/4314','Computer Engineering',NULL,1,3.0,3.4,1.5,3.5,4.5,3.1,'Local Area Networks Lab'),('CSCE 437/4313','Computer Engineering',NULL,3,4.1,2.6,3.6,3.2,1.8,2.2,'Local and Metropolitan Area Networks'),('CSCE 438L/4302','Computer Engineering',NULL,1,1.5,2.2,1.2,3.0,3.2,1.2,'Embedded Systems Lab'),('CSCE 439L/3313','Computer Engineering',NULL,1,1.2,3.0,3.1,2.0,3.0,4.2,'Computer Networks Lab'),('CSCE 441/4701','Computer Engineering',NULL,3,3.6,2.6,4.6,4.3,3.5,2.4,'Object-Oriented Analysis and Design'),('CSCE 445/4411','Computer Engineering',NULL,3,2.2,1.5,3.5,2.8,3.2,4.2,'Fundamentals of Distributed Systems '),('CSCE 446/4421','Computer Engineering',NULL,3,3.1,4.2,4.1,2.3,2.4,4.1,'Computer Security'),('CSCE 447/4101','Computer Engineering',NULL,3,2.3,4.7,3.4,2.5,3.5,4.5,'Compiler Design '),('CSCE 448/4702','Computer Engineering',NULL,3,1.2,4.2,3.5,2.3,4.7,5.0,'Secure Systems Engineering '),('CSCE 453/4501','Computer Engineering',NULL,3,2.6,3.5,3.2,4.6,5.0,3.4,'Database Systems'),('CSCE 455/4621','Computer Engineering',NULL,3,4.7,4.3,2.3,4.5,4.4,3.2,'Computer Graphics '),('CSCE 456/4502','Computer Engineering',NULL,3,4.2,4.1,3.2,3.5,3.4,4.3,'Design of Web-based Systems'),('CSCE 465/3601','Computer Engineering',NULL,3,3.4,4.1,3.4,2.0,4.1,3.5,'Fundamentals of Artificial Intelligence'),('CSCE 485/4930','Computer Engineering',NULL,3,2.2,2.3,1.2,1.1,2.8,2.6,'Selected Topics in Computer Science and Engineering: Introduction to Information Theory.'),('CSCE 490/4950','Computer Engineering',NULL,1,2.3,2.3,2.3,3.5,2.5,3.4,'Industrial Training'),('CSCE 491/4980','Computer Engineering',NULL,1,2.2,2.0,2.0,3.1,4.2,2.5,'Senior Project I '),('CSCE 492/4981','Computer Engineering',NULL,2,3.5,3.1,4.5,2.8,2.5,4.2,'Senior Project II '),('CSCE 495/4910','Computer Engineering',NULL,3,4.4,4.5,2.7,2.2,3.5,2.2,'Guided Studies in Computer Science and Engineering'),('CSCE 525/5221','Computer Engineering',NULL,3,1.1,1.2,4.8,2.3,2.3,4.2,'Algorithms and Complexity Theory '),('CSCE 527/5262','Computer Engineering',NULL,3,4.6,3.2,4.7,2.3,2.8,1.2,'Neural Networks and Genetic Algorithms'),('CSCE 529/5222','Computer Engineering',NULL,3,1.2,2.3,4.5,4.6,4.6,3.4,'Design and Analysis of Parallel Algorithms'),('CSCE 530/5231','Computer Engineering',NULL,3,2.3,2.2,3.2,3.5,3.5,2.4,'Advanced Processor Architecture'),('CSCE 532/5242','Computer Engineering',NULL,3,4.5,3.2,5.0,1.2,1.2,4.6,'Parallel Computer Architecture'),('CSCE 535/5232','Computer Engineering',NULL,3,4.3,1.8,3.2,2.7,2.7,1.1,'Advanced Network Modelling'),('CSCE 545/5241','Computer Engineering',NULL,3,1.2,4.5,2.4,4.5,4.5,2.3,'Distributed Systems'),('CSCE 565/5261','Computer Engineering',NULL,3,4.6,5.0,2.3,1.4,1.4,4.5,'Advanced Artificial Intelligence'),('FINC 000/5230','Finance',NULL,3,4.1,4.5,1.1,1.4,3.0,4.6,'Statistical and numerical methods'),('FINC 000/5320','Finance',NULL,3,1.2,4.6,3.0,3.2,3.4,4.2,'Financial Computing'),('FINC 303/2101','Finance',NULL,3,2.3,2.3,3.6,4.6,4.2,4.8,'Business Finance I'),('FINC 404/3201','Finance',NULL,3,4.3,4.5,1.2,3.5,4.6,3.2,'Investment Analysis'),('FINC 405/3401','Finance',NULL,3,3.4,1.2,3.3,4.5,5.0,2.3,'Applied Banking'),('FINC 512/5313','Finance',NULL,3,3.0,4.3,2.3,3.4,3.2,3.4,'Options and Derivatives'),('FINC 513/5331','Finance',NULL,3,2.0,2.3,4.5,4.6,2.3,3.2,'Fixed Income Securities'),('FINC 514/5353','Finance',NULL,3,2.3,3.2,3.2,4.1,2.3,2.3,'Financial Risk Analysis'),('FINC 516/5314','Finance',NULL,3,3.2,4.4,4.7,2.3,4.5,4.1,'Real Estate Finance'),('FINC 517/5352','Finance',NULL,3,4.5,1.4,4.6,3.0,4.3,3.2,'Financial Modeling'),('FINC 518/5315','Finance',NULL,3,3.5,3.3,2.3,4.3,4.3,4.2,'Islamic Finance'),('FINC 527/5201','Finance',NULL,3,1.2,2.3,4.4,2.7,4.8,1.4,'Managerial Economics'),('FINC 535/5204','Finance',NULL,3,2.5,4.6,2.2,1.2,2.4,4.5,'Applied Financial Econometrics'),('FINC 540/5202','Finance',NULL,3,3.4,2.1,1.1,4.8,3.0,2.3,'Financial Management'),('FINC 541/5203','Finance',NULL,3,4.6,2.3,1.2,3.2,2.5,1.2,'Investments and Portfolio Management'),('FINC 542/5311','Finance',NULL,3,4.1,2.2,1.2,1.2,2.3,3.2,'International Financial Management'),('FINC 543/5312','Finance',NULL,3,2.2,1.1,2.3,4.5,2.2,4.4,'Financial Institutions and Markets'),('FINC 544/5351','Finance',NULL,3,2.3,3.4,4.1,2.0,1.2,2.8,'Advanced Corporate Finance'),('FINC 545/5333','Finance',NULL,3,3.5,4.1,2.2,2.3,1.2,3.5,'Private Equity and Venture Capital'),('FINC 570/5370','Finance',NULL,3,4.1,3.0,3.5,1.2,3.4,2.3,'Selected Topics in Financial Management'),('FINC 575/5375','Finance',NULL,3,3.2,2.0,4.1,4.6,4.6,3.4,'Independent Study in Financial Management'),('FINC 590/5402','Finance',NULL,3,4.6,2.3,2.2,3.5,2.5,4.6,'Research Methodology'),('FINC 599/5401','Finance',NULL,9,2.1,1.2,1.7,4.1,3.4,4.8,'Thesis');
/*!40000 ALTER TABLE `Courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Instructors`
--

DROP TABLE IF EXISTS `Instructors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Instructors` (
  `ID` varchar(10) NOT NULL,
  `First_Name` varchar(25) NOT NULL,
  `Last_Name` varchar(25) NOT NULL,
  `Grading` decimal(2,1) DEFAULT NULL,
  `TeachingStyle` decimal(2,1) DEFAULT NULL,
  `Flexibility` decimal(2,1) DEFAULT NULL,
  `Availability` decimal(2,1) DEFAULT NULL,
  `Department` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instructors`
--

LOCK TABLES `Instructors` WRITE;
/*!40000 ALTER TABLE `Instructors` DISABLE KEYS */;
INSERT INTO `Instructors` VALUES ('900032789','Amr','Hassanein',2.3,3.4,4.7,4.7,'Construction'),('900111865','Islam','Azzam',3.6,2.3,4.1,4.1,'Management'),('900112383','Nouri','Sakr',4.8,4.2,3.4,4.5,'Computer Science and Engineering'),('900122211','Tamer','ElBatt',4.1,4.8,3.4,3.3,'Computer Science and Engineering'),('900122544','Ahmed','Rafea',4.5,4.2,2.3,4.3,'Computer Science and Engineering'),('900123784','Ashraf','Mourad',2.7,3.2,2.4,3.9,'Computer Science and Engineering'),('900124575','Mohamed','Halaby',1.0,1.5,3.5,2.3,'Computer Science and Engineering'),('900132415','Tarek','Ibrahim Eldomiaty',3.4,4.4,1.2,4.8,'Management'),('900133266','Hamed','Hassouna',2.3,4.5,4.1,3.0,'Management'),('900138965','Nourhan','Eid',3.7,4.5,3.4,3.1,'Management'),('900139850','Ahmed','SabryAbou-Zaid',3.9,4.5,4.8,4.8,'Economics'),('900142098','Rim','Cherif',4.6,3.2,4.4,3.6,'Management'),('900144001','Ahmed','Ismail',4.2,3.3,3.8,3.9,'Management'),('900145327','Howaida','Ismail',3.3,4.3,2.1,4.7,'Computer Science and Engineering'),('900150987','Eskandar','Tooma',2.3,2.1,3.2,3.9,'Management'),('900153788','Moustafa','Amin Youssef',4.1,2.9,4.9,2.1,'Computer Science and Engineering'),('900154324','Sally','ElGhamrawy',5.0,5.0,5.0,5.0,'Computer Science and Engineering'),('900154326','Mohamed','Sedky',4.2,3.8,4.7,2.3,'Computer Science and Engineering'),('900155263','Sherif','El-Kassas',4.3,4.7,2.1,3.4,'Computer Science and Engineering'),('900162232','Hossam','Sharara',4.4,4.5,2.7,4.2,'Computer Science and Engineering'),('900164321','Mohamed','Shalan',4.5,4.3,3.6,4.1,'Computer Science and Engineering'),('900174562','Jasmin','Fouad',4.0,3.7,2.8,4.8,'Management'),('900176752','Amr','ElMougy',4.4,4.7,3.6,3.4,'Computer Science and Engineering'),('900189992','Sherif','Aly',4.4,4.6,2.7,3.4,'Computer Science and Engineering'),('900198277','Cherif','Salama',3.4,3.7,2.1,2.7,'Computer Science and Engineering'),('900198746','Eman','Hossam',2.3,2.1,3.1,3.5,'Computer Science and Engineering'),('900201100','Alia','ElBolock',3.2,2.3,4.4,3.7,'Computer Science and Engineering'),('900202028','Suzanne','Safwat',4.4,4.5,4.0,4.5,'Computer Science and Engineering'),('900210389','Wael','Abdallah',4.2,2.1,4.5,2.3,'Management'),('900211827','Amr','El-Kadi',3.2,3.2,2.2,4.6,'Computer Science and Engineering'),('900212001','Mahmoud','Khalifa',3.3,2.1,4.8,4.2,'Management'),('900212233','Mohamed','Moustafa',3.2,4.8,4.6,4.6,'Computer Science and Engineering'),('900212527','Noah','Farhadi',4.2,4.1,4.6,4.2,'Management'),('900213854','Aya','Selim',2.2,4.3,4.2,4.1,'Management'),('900214028','Hamza','Badawy',3.3,2.5,3.9,4.1,'Computer Science and Engineering'),('900214551','Mina','Ayad',3.2,2.4,4.2,3.9,'Management'),('900215672','Kariman','Kordy',3.2,4.3,3.2,3.9,'Management'),('900216786','Amr','Badr El Din',3.4,4.0,4.2,3.2,'Computer Science and Engineering'),('900217666','Mikhail','Mikhail',2.1,3.3,3.2,3.6,'Computer Science and Engineering'),('900217899','Noha','Youssef',3.5,4.2,3.9,4.3,'Management'),('900218881','Mohamed','Bouaddi',2.7,3.2,4.5,4.7,'Management'),('900221448','Seif','Eldawlatly',1.2,3.4,4.3,2.3,'Computer Science and Engineering'),('900223121','Amr','Goneid',4.3,4.1,2.1,3.2,'Computer Science and Engineering'),('900230443','Marina','Apaydin',2.3,2.1,3.1,3.5,'Management'),('900233638','Jasmin','Fouad',4.8,1.2,3.2,2.3,'Management'),('900237980','Hakim','Meshreki',2.0,2.3,4.8,4.8,'Management'),('900238986','Medhat','Hassanein',4.7,3.4,4.4,2.0,'Management'),('900313024','Ghada','Hassan',2.2,3.7,4.5,3.8,'Computer Science and Engineering'),('900413279','Ghada','Bahig',3.4,2.4,3.8,4.5,'Computer Science and Engineering'),('900763476','Maher','Asham',4.0,3.7,2.8,4.8,'Management');
/*!40000 ALTER TABLE `Instructors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Review` (
  `User_Major` varchar(100) NOT NULL,
  `RText` text,
  `User_Email` varchar(100) NOT NULL,
  `Semester` varchar(20) NOT NULL,
  `Inst_ID` varchar(10) DEFAULT NULL,
  `CRN` varchar(30) NOT NULL,
  `Grading` decimal(2,1) DEFAULT NULL,
  `TeachingStyle` decimal(2,1) DEFAULT NULL,
  `Flexibility` decimal(2,1) DEFAULT NULL,
  `Availability` decimal(2,1) DEFAULT NULL,
  `Engaging` decimal(2,1) DEFAULT NULL,
  `Support` decimal(2,1) DEFAULT NULL,
  `ContentQuality` decimal(2,1) DEFAULT NULL,
  `Difficulty` decimal(2,1) DEFAULT NULL,
  `Workload` decimal(2,1) DEFAULT NULL,
  PRIMARY KEY (`Semester`,`User_Email`,`CRN`),
  KEY `CRN` (`CRN`),
  KEY `User_Email` (`User_Email`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`CRN`) REFERENCES `Courses` (`CRN`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`User_Email`) REFERENCES `Users` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
INSERT INTO `Review` VALUES ('Computer Science and Mathematics','It is not easy  with this Professor if you don\'t have a computer science background.','malaksafwat@aucegypt.edu','Fall 2019','900122211','CSCE 106/1001',3.2,2.1,4.3,3.2,NULL,NULL,NULL,NULL,NULL),('Computer Engineering and Mathematics','I felt that this lab is not really benefitial. ','omar.a@aucegypt.edu','Fall 2019',NULL,'CSCE 000/1102',5.0,NULL,NULL,NULL,4.5,4.2,3.4,3.2,4.8),('Computer Engineering and Mathematics','She seems a bit tough, but she is reallly supportive if you need any help.','omar.a@aucegypt.edu','Fall 2019','900145327','CSCE 110/1101',4.9,3.2,3.9,3.6,NULL,NULL,NULL,NULL,NULL),('Finance','Easy A if you study and participate in the class. The exams are mainly from the class disscutions.','ahmedmohamed@aucegypt.edu','Fall 2020','900142098','FINC 404/3201',2.3,3.9,3.2,4.5,3.5,4.9,3.6,4.0,3.6),('Finance','For me, the course was very easy and doable with other courses. If you understand the concepts well,  its an easy A and I loved the professor\'s  teaching style, the class is very enganing and she makes it so fun.','hanah-salama@aucegypt.edu','Fall 2020','900174562','FINC 303/2101',4.7,4.7,4.5,4.6,2.3,1.2,3.3,1.3,2.2),('Computer Science and Mathematics','He makes the course bearable, but you would need to understand somethings on your own.','malaksafwat@aucegypt.edu','Fall 2020','900223121','CSCE 000/2211',3.4,4.3,3.2,4.9,3.1,4.0,3.0,4.2,4.2),('Finance','It needs frequent studying to be able to understand all the concepts and keep up with the course.','mostafa_m@aucegypt.edu','Fall 2020','900133266','FINC 540/5202',4.3,3.5,3.5,3.2,3.2,3.6,4.9,3.4,4.9),('Computer Engineering','Professor Amr is very lenient and kind as well as his assignments and projects are considered easy.','seifali@aucegypt.edu','Fall 2020','900223121','CSCE 000/2211',3.6,4.6,3.9,3.1,NULL,NULL,NULL,NULL,NULL),('Electronics Engineering','I found it difficult as computer science is not my major.','yasseryassin@aucegypt.edu','Fall 2020',NULL,'CSCE 106/1001',2.1,NULL,NULL,NULL,2.2,4.2,4.4,3.3,4.5),('Finance','If the semester is light, the course wouldn\'t be that hard, but Although I heard good stuff about this professor, I did not like the grading because it was a bit random.','ahmedmohamed@aucegypt.edu','Fall 2021','900215672','FINC 540/5202',3.5,3.7,3.2,4.2,3.2,3.5,3.2,3.2,4.5),('Finance','I found this course a bit hard compared to other finance courses. However, This semester, the professor was not fair in the exams, and the grades. Yet, the course itself is very enjoyable.','hanah-salama@aucegypt.edu','Fall 2021','900215672','FINC 540/5202',4.8,3.5,3.6,3.5,3.4,3.2,3.6,3.6,4.7),('Computer Science','I understood the content very well from her explanation, would recommend taking the course with her.','lina.y@aucegypt.edu','Fall 2021','900112383','CSCE 106/1001',1.2,3.2,4.0,3.5,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','Extremely hard course, definitely not an easy A.','safwatjr@aucegypt.edu','Fall 2021',NULL,'CSCE 337/3304',4.3,NULL,NULL,NULL,4.3,4.3,3.2,3.8,3.6),('Computer Engineering','For a lab, it is time-consuming, especially due to the final project needed in the course.','sarah.yassin@aucegypt.edu','Fall 2021',NULL,'CSCE 000/2203',4.5,NULL,NULL,NULL,3.3,4.2,3.9,1.1,3.5),('Computer Engineering','A lot of new concepts, but a very beneficial course for any computer scientist. The professor is very knowledgeable but you have to focus very well in class to do good.','sarah.yassin@aucegypt.edu','Fall 2021','900223121','CSCE 000/2211',3.4,4.2,3.2,4.7,4.5,4.2,3.9,3.5,4.0),('Computer Engineering','The content itself helps in having a clearer perspective of different computer science algorithms and the complexities behind them.','sarah.yassin@aucegypt.edu','Fall 2021',NULL,'CSCE 321/2202',4.4,NULL,NULL,NULL,3.5,3.2,4.2,3.3,4.2),('Computer Science','Course is easy if you are familiar with coding, and I really loved her, she is really knowledgable and available if you need anything throughout the course.','mohamed.m@aucegypt.edu','Fall 2022','900145327','CSCE 106/1001',4.7,3.6,3.1,4.9,3.4,3.2,3.4,4.5,4.0),('Finance',NULL,'yasserzidan@aucegypt.edu','Fall 2022',NULL,'FINC 303/2101',4.5,NULL,NULL,NULL,3.4,4.2,3.4,4.2,3.2),('Finance','Instructor is very lenient, her explaining is amazing, and she\'s a fair grader as well. Totally recommend her.','salma_ali@aucegypt.edu','Fall 2023','900174562','FINC 303/2101',4.4,4.5,2.2,2.5,NULL,NULL,NULL,NULL,NULL),('Finance','I loved the quality of the content and did not find it hard at all and Dr Rim\'s is a very good professor, but her exams are a bit tricky.','salmamohamed@aucegypt.edu','Fall 2023','900142098','FINC 404/3201',3.2,4.2,4.5,2.1,3.2,4.5,3.5,4.9,3.5),('Finance','A bit hard, but the content is very beneficial for other upcoming courses, but the professor has a unique teaching style that complements the content of the course.','yasserzidan@aucegypt.edu','Fall 2023','900133266','FINC 540/5202',4.5,3.2,3.2,3.6,4.4,3.2,3.2,3.8,3.7),('Computer Science','I did not enjoy the course with her, wouldn\'t recommend it.','younesmohamed@aucegypt.edu','Fall 2023','900145327','CSCE 106/1001',2.2,2.0,2.5,4.6,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','I believe that she is knowledgable and her explanation is good, but her exams are too hard.','karimtarek@aucegypt.edu','Spring 2019','900112383','CSCE 106/1001',3.4,4.0,3.8,4.1,NULL,NULL,NULL,NULL,NULL),('Computer Engineering and Mathematics','Getting familiar with C++ syntax is diffiduclt, but once  you do and you understand the content well it becomes easier.','omar.a@aucegypt.edu','Spring 2019',NULL,'CSCE 106/1001',3.2,NULL,NULL,NULL,3.6,1.2,2.1,4.2,4.4),('Computer Engineering','She makes the content easy to understand which is why I would recommend her to anyone who doesn\'t have a cs background.','seifali@aucegypt.edu','Spring 2019','900145327','CSCE 106/1001',4.7,3.2,3.2,4.0,NULL,NULL,NULL,NULL,NULL),('Finance','Fair grader and knowledgeable, but she is not always available during office hours which may bother some students.','ahmedmohamed@aucegypt.edu','Spring 2020','900174562','FINC 303/2101',4.1,4.7,3.2,1.2,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','Exams are really easy so its an easy A course with him.','logy_17@aucegypt.edu','Spring 2020','900201100','CSCE 106/1001',4.4,3.0,4.2,3.3,NULL,NULL,NULL,NULL,NULL),('Computer Science and Mathematics','This course should be taken in a light semester, content is not easy. However, the professor is very kind as he makes the course easier and not overwhelming.','malaksafwat@aucegypt.edu','Spring 2020','900223121','CSCE 110/1101',4.7,3.4,4.9,3.2,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','The only problem is that she has very high expectations and the course itself is very hard.','safwatjr@aucegypt.edu','Spring 2020','900145327','CSCE 110/1101',4.3,3.4,2.6,3.2,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','The content of the course is too much if you don\'t have any background knoweldge. However, very good professor would recommend taking the course with him.','seifali@aucegypt.edu','Spring 2020','900145327','CSCE 110/1101',4.4,4.2,3.9,3.5,4.0,4.2,3.2,3.0,3.0),('Finance','The courses\' content is very easy, but the grading is a bit high, and the professor is very fair and you will actually learn and enjoy the course with her.','hanah-salama@aucegypt.edu','Spring 2021','900142098','FINC 404/3201',4.2,3.8,3.3,3.3,3.6,4.7,3.2,4.6,3.2),('Finance','Attend all classes and participate very well, and you won\'t have any obstacles in this course.','mahmoudelkady@aucegypt.edu','Spring 2021','900174562','FINC 303/2101',4.8,4.7,2.3,4.7,4.2,3.5,3.4,3.4,3.1),('Computer Engineering','A tough but knowledgable professor.','safwatjr@aucegypt.edu','Spring 2021','900164321','CSCE 230/2301',3.2,4.6,3.2,4.1,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','One of the kindest, understandable, and knowledgable professors at AUC.','safwatjr@aucegypt.edu','Spring 2021','900198277','CSCE 231/2303',3.2,4.6,3.2,3.9,NULL,NULL,NULL,NULL,NULL),('Computer Engineering','His  exams are very easy and similar to the slides, and his grading is very fair.','safwatjr@aucegypt.edu','Spring 2022','900223121','CSCE 485/4930',3.2,3.2,4.6,4.5,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Take`
--

DROP TABLE IF EXISTS `Take`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Take` (
  `CRN` varchar(30) NOT NULL,
  `User_Email` varchar(60) NOT NULL,
  `Inst_ID` varchar(10) NOT NULL,
  `Semester` varchar(20) NOT NULL,
  PRIMARY KEY (`CRN`,`User_Email`,`Inst_ID`,`Semester`),
  KEY `User_Email` (`User_Email`),
  KEY `Inst_ID` (`Inst_ID`),
  CONSTRAINT `take_ibfk_1` FOREIGN KEY (`CRN`) REFERENCES `Courses` (`CRN`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `take_ibfk_2` FOREIGN KEY (`User_Email`) REFERENCES `Users` (`Email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `take_ibfk_3` FOREIGN KEY (`Inst_ID`) REFERENCES `Instructors` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Take`
--

LOCK TABLES `Take` WRITE;
/*!40000 ALTER TABLE `Take` DISABLE KEYS */;
INSERT INTO `Take` VALUES ('CSCE 106/1001','karimtarek@aucegypt.edu','900112383','Spring 2019'),('CSCE 106/1001','lina.y@aucegypt.edu','900112383','Fall 2021'),('CSCE 321/2202','omar.a@aucegypt.edu','900112383','Fall 2019'),('CSCE 321/2202','sarah.yassin@aucegypt.edu','900112383','Fall 2021'),('CSCE 106/1001','malaksafwat@aucegypt.edu','900122211','Fall 2019'),('CSCE 316/3102','safwatjr@aucegypt.edu','900123784','Fall 2021'),('CSCE 000/2203','omar.a@aucegypt.edu','900124575','Fall 2019'),('CSCE 000/2203','sarah.yassin@aucegypt.edu','900124575','Fall 2021'),('FINC 540/5202','mostafa_m@aucegypt.edu','900133266','Fall 2020'),('FINC 540/5202','yasserzidan@aucegypt.edu','900133266','Fall 2023'),('FINC 404/3201','ahmedmohamed@aucegypt.edu','900142098','Fall 2020'),('FINC 404/3201','hanah-salama@aucegypt.edu','900142098','Spring 2021'),('FINC 404/3201','mostafa_m@aucegypt.edu','900142098','Fall 2019'),('FINC 404/3201','salmamohamed@aucegypt.edu','900142098','Fall 2023'),('CSCE 106/1001','mariam_samy@aucegypt.edu','900145327','Fall 2021'),('CSCE 106/1001','mohamed.m@aucegypt.edu','900145327','Fall 2022'),('CSCE 106/1001','seifali@aucegypt.edu','900145327','Spring 2019'),('CSCE 106/1001','younesmohamed@aucegypt.edu','900145327','Fall 2023'),('CSCE 110/1101','omar.a@aucegypt.edu','900145327','Fall 2019'),('CSCE 110/1101','safwatjr@aucegypt.edu','900145327','Spring 2020'),('CSCE 110/1101','seifali@aucegypt.edu','900145327','Spring 2020'),('CSCE 000/4604','sarah.yassin@aucegypt.edu','900153788','Spring 2022'),('CSCE 230/2301','safwatjr@aucegypt.edu','900164321','Spring 2021'),('CSCE 337/3304','safwatjr@aucegypt.edu','900164321','Fall 2021 '),('FINC 303/2101','ahmedmohamed@aucegypt.edu','900174562','Spring 2020'),('FINC 303/2101','hanah-salama@aucegypt.edu','900174562','Fall 2020'),('FINC 303/2101','mahmoudelkady@aucegypt.edu','900174562','Spring 2021'),('FINC 303/2101','mostafa_m@aucegypt.edu','900174562','Spring 2019'),('FINC 303/2101','salma_ali@aucegypt.edu','900174562','Fall 2023'),('FINC 303/2101','yasserzidan@aucegypt.edu','900174562','Fall 2022'),('CSCE 000/1102','seifali@aucegypt.edu','900176752','Spring 2020'),('CSCE 231/2303','safwatjr@aucegypt.edu','900198277','Spring 2021'),('CSCE 000/1102','malaksafwat@aucegypt.edu','900198746','Spring 2020'),('CSCE 000/1102','omar.a@aucegypt.edu','900198746','Fall 2019'),('CSCE 000/1102','safwatjr@aucegypt.edu','900198746','Spring 2020'),('CSCE 106/1001','logy_17@aucegypt.edu','900201100','Spring 2020'),('CSCE 106/1001','omar.a@aucegypt.edu','900201100','Spring 2019'),('CSCE 106/1001','safwatjr@aucegypt.edu','900201100','Fall 2019'),('CSCE 106/1001','yasseryassin@aucegypt.edu','900201100','Fall 2020'),('CSCE 239L/2302','safwatjr@aucegypt.edu','900202028','Spring 2021'),('FINC 540/5202','ahmedmohamed@aucegypt.edu','900215672','Fall 2021'),('FINC 540/5202','hanah-salama@aucegypt.edu','900215672','Fall 2021'),('CSCE 106/1001','malekmostafa@aucegypt.edu','900217666','Spring 2022'),('CSCE 106/1001','sarah.yassin@aucegypt.edu','900217666','Spring 2021'),('CSCE 106/1001','zahed.a@aucegypt.edu','900217666','Spring 2020'),('CSCE 000/2211','malaksafwat@aucegypt.edu','900223121','Fall 2020'),('CSCE 000/2211','sarah.yassin@aucegypt.edu','900223121','Fall 2021'),('CSCE 000/2211','seifali@aucegypt.edu','900223121','Fall 2020'),('CSCE 110/1101','malaksafwat@aucegypt.edu','900223121','Spring 2020'),('CSCE 321/2202','safwatjr@aucegypt.edu','900223121','Fall 2020'),('CSCE 485/4930','safwatjr@aucegypt.edu','900223121','Spring 2022'),('FINC 405/3401','mostafa_m@aucegypt.edu','900763476','Spring 2020'),('FINC 405/3401','yasserzidan@aucegypt.edu','900763476','Spring 2023');
/*!40000 ALTER TABLE `Take` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teach`
--

DROP TABLE IF EXISTS `Teach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Teach` (
  `CRN` varchar(30) NOT NULL,
  `Inst_ID` varchar(10) NOT NULL,
  `Semester` varchar(20) NOT NULL,
  PRIMARY KEY (`CRN`,`Inst_ID`,`Semester`),
  KEY `Inst_ID` (`Inst_ID`),
  CONSTRAINT `teach_ibfk_1` FOREIGN KEY (`CRN`) REFERENCES `Courses` (`CRN`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `teach_ibfk_2` FOREIGN KEY (`Inst_ID`) REFERENCES `Instructors` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teach`
--

LOCK TABLES `Teach` WRITE;
/*!40000 ALTER TABLE `Teach` DISABLE KEYS */;
INSERT INTO `Teach` VALUES ('CSCE 106/1001','900112383','Fall 2021'),('CSCE 106/1001','900112383','Spring 2019'),('CSCE 321/2202','900112383','Fall 2019'),('CSCE 321/2202','900112383','Fall 2021'),('CSCE 106/1001','900122211','Fall 2019'),('CSCE 316/3102','900123784','Fall 2021'),('CSCE 000/2203','900124575','Fall 2019'),('CSCE 000/2203','900124575','Fall 2021'),('FINC 540/5202','900133266','Fall 2020'),('FINC 540/5202','900133266','Fall 2023'),('FINC 404/3201','900142098','Fall 2019'),('FINC 404/3201','900142098','Fall 2020'),('FINC 404/3201','900142098','Fall 2023'),('FINC 404/3201','900142098','Spring 2021'),('CSCE 106/1001','900145327','Fall 2021'),('CSCE 106/1001','900145327','Fall 2022'),('CSCE 106/1001','900145327','Fall 2023'),('CSCE 106/1001','900145327','Spring 2019'),('CSCE 110/1101','900145327','Fall 2019'),('CSCE 110/1101','900145327','Spring 2020'),('CSCE 000/4604','900153788','Spring 2022'),('CSCE 230/2301','900164321','Spring 2021'),('CSCE 337/3304','900164321','Fall 2021'),('FINC 303/2101','900174562','Fall 2020'),('FINC 303/2101','900174562','Fall 2022'),('FINC 303/2101','900174562','Fall 2023'),('FINC 303/2101','900174562','Spring 2019'),('FINC 303/2101','900174562','Spring 2020'),('FINC 303/2101','900174562','Spring 2021'),('CSCE 000/1102','900176752','Spring 2020'),('CSCE 231/2303','900198277','Spring 2021'),('CSCE 000/1102','900198746','Fall 2019'),('CSCE 000/1102','900198746','Spring 2020'),('CSCE 106/1001','900201100','Fall 2019'),('CSCE 106/1001','900201100','Fall 2020'),('CSCE 106/1001','900201100','Spring 2019'),('CSCE 106/1001','900201100','Spring 2020'),('CSCE 239L/2302','900202028','Spring 2021'),('FINC 540/5202','900215672','Fall 2021'),('CSCE 106/1001','900217666','Spring 2020'),('CSCE 106/1001','900217666','Spring 2021'),('CSCE 106/1001','900217666','Spring 2022'),('CSCE 000/2211','900223121','Fall 2020'),('CSCE 000/2211','900223121','Fall 2021'),('CSCE 110/1101','900223121','Spring 2020'),('CSCE 321/2202','900223121','Fall 2020'),('CSCE 485/4930','900223121','Spring 2022'),('FINC 405/3401','900763476','Spring 2020'),('FINC 405/3401','900763476','Spring 2023');
/*!40000 ALTER TABLE `Teach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `Email` varchar(60) NOT NULL,
  `FullName` varchar(50) NOT NULL,
  `Minor` varchar(50) DEFAULT NULL,
  `Major` varchar(100) NOT NULL,
  `University` varchar(60) NOT NULL,
  `Standing` varchar(15) NOT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('ahmedmohamed@aucegypt.edu','Ahmed',NULL,'Finance','The American University In Cairo','Senior'),('faridaabdelnaby@aucegypt.edu','Farida',NULL,'Construction Engineering','The American University In Cairo','Freshman'),('hanah-salama@aucegypt.edu','Hanah',NULL,'Finance','The American University In Cairo','Freshman'),('karimtarek@aucegypt.edu','Karim',NULL,'Computer Engineering','The American University In Cairo','Junior'),('lailaamin@aucegypt.edu','Laila',NULL,'Marketing','The American University In Cairo','Senior'),('lina.y@aucegypt.edu','Lina','Mathematics','Computer Science','The American University In Cairo','Freshman'),('logy_17@aucegypt.edu','Logy','Mathematics','Computer Engineering','The American University In Cairo','Junior'),('mahmoudelkady@aucegypt.edu','Mahmoud','Visual Arts','Finance','The American University In Cairo','Junior'),('malaksafwat@aucegypt.edu','Malak',NULL,'Computer Science and Mathematics','The American University In Cairo','Sophmore'),('malekmostafa@aucegypt.edu','Malek','Interactive Media Design','Computer Science','The American University In Cairo','Senior'),('mariam_samy@aucegypt.edu','Mariam',NULL,'Computer Engineering','The American University In Cairo','Freshman'),('marwankhaled@aucegypt.edu','Marwan','Computer Science','Data Science','The American University In Cairo','Senior'),('mohamed.m@aucegypt.edu','Mohamed','Business','Computer Science','The American University In Cairo','Junior'),('mostafa_m@aucegypt.edu','Mostafa',NULL,'Finance','The American University In Cairo','Senior'),('omar.a@aucegypt.edu','Omar',NULL,'Computer Engineering and Mathematics','The American University In Cairo','Junior'),('safwatjr@aucegypt.edu','Safwat',NULL,'Computer Engineering','The American University In Cairo','Junior'),('salma_ali@aucegypt.edu','Salma',NULL,'Finance','The American University In Cairo','Junior'),('salmamohamed@aucegypt.edu','Salma','Film','Finance','The American University In Cairo','Sophmore'),('samehamr@aucegypt.edu','Sameh',NULL,'Management of Information and Communication Technology','The American University In Cairo','Junior'),('sarah.yassin@aucegypt.edu','Sarah','Economics','Computer Engineering','The American University In Cairo','Junior'),('seifali@aucegypt.edu','Seif',NULL,'Computer Engineering','The American University In Cairo','Senior'),('shahdamr@aucegypt.edu','Shahd','Interactive Media Design','Psychology','The American University In Cairo','Sophmore'),('yasminayasser@aucegypt.edu','Yasmina',NULL,'Chemsitry','The American University In Cairo','Sophmore'),('yasseryassin@aucegypt.edu','Yasser','Computer Science','Electronics Engineering','The American University In Cairo','Sophmore'),('yasserzidan@aucegypt.edu','Yasser',NULL,'Finance','The American University In Cairo','Freshman'),('yassin.y@aucegypt.edu','Yassin',NULL,'Accounting','The American University In Cairo','Senior'),('younesmohamed@aucegypt.edu','Younes',NULL,'Computer Science','The American University In Cairo','Senior'),('youssefhany@aucegypt.edu','Youssef','Business','Mechanical Engineering','The American University In Cairo','Freshman'),('zahed.a@aucegypt.edu','Zahed','Game Design','Computer Science','The American University In Cairo','Junior');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-08 22:55:58