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
  `Major` varchar(40) NOT NULL,
  `CDescription` text,
  `Credit_Hours` int NOT NULL,
  `Rating` decimal(2,1) NOT NULL,
  `CName` varchar(60) NOT NULL,
  PRIMARY KEY (`CRN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES ('CSCE 000/1102 ','CSCE',NULL,1,4.5,'Fundamentals of Computing II Lab'),('CSCE 000/2203 ','CSCE',NULL,1,3.5,'Analysis and Design of Algorithms Lab'),('CSCE 000/2211','CSCE',NULL,3,4.5,'Applied Data Structures'),('CSCE 000/3402 ','CSCE',NULL,1,5.0,'Operating Systems Lab '),('CSCE 000/4303 ','CSCE',NULL,3,4.0,'Embedded Systems on Chip Design'),('CSCE 000/4315','CSCE',NULL,3,4.0,'Internet of Things Networking Protocols'),('CSCE 000/4603 ','CSCE',NULL,3,4.0,'Fundamentals of Computer Vision'),('CSCE 000/4604 ','CSCE',NULL,3,4.5,'Practical Machine Deep Learning'),('CSCE 000/5243','CSCE',NULL,3,4.7,'Information and System Security'),('CSCE 000/5245','CSCE',NULL,3,2.6,'Embedded Real-Time Systems'),('CSCE 102/1000','CSCE',NULL,2,5.0,'Introduction to Computers and their Applications'),('CSCE 106/1001','CSCE',NULL,3,4.0,'Fundamentals of Computing I '),('CSCE 110/1101 ','CSCE',NULL,3,3.5,'Fundamentals of Computing II'),('CSCE 201/2502 ','CSCE',NULL,2,3.2,'Information Technology'),('CSCE 230/2301 ','CSCE',NULL,3,4.0,'Digital Design I'),('CSCE 231/2303','CSCE',NULL,3,4.5,'Computer Organization and Assembly Language Programming'),('CSCE 239L/2302 ','CSCE',NULL,1,4.0,'Digital Design I Lab '),('CSCE 253/2501 ','CSCE',NULL,3,4.0,'Fundamentals of Database Systems '),('CSCE 315/3101 ','CSCE',NULL,3,4.0,'Programming Language'),('CSCE 316/3102 ','CSCE',NULL,3,4.5,'Programming in Java'),('CSCE 317/3103 ','CSCE',NULL,3,3.5,'Object Oriented Programming'),('CSCE 321/2202 ','CSCE',NULL,3,3.8,'Analysis and Design of Algorithms'),('CSCE 325/3104 ','CSCE',NULL,3,4.2,'Concepts of Programming Languages'),('CSCE 330/3301','CSCE',NULL,3,3.6,'Computer Architecture'),('CSCE 332/3303 ','CSCE',NULL,3,3.0,'Fundamental Microelectronics'),('CSCE 333/3311 ','CSCE',NULL,3,2.5,'Data and Computer Communications'),('CSCE 337/3304 ','CSCE',NULL,3,3.0,'Digital Design II '),('CSCE 339L/3302 ','CSCE',NULL,1,3.2,'Computer Architecture Lab'),('CSCE 341/3701 ','CSCE',NULL,3,4.0,'Software Engineering'),('CSCE 342/3421','CSCE',NULL,3,3.2,'Fundamentals of Computing and Communication Systems'),('CSCE 345/3401','CSCE',NULL,3,4.0,'Operating Systems'),('CSCE 346/3422 ','CSCE',NULL,3,3.5,'Introduction to Information Security'),('CSCE 363/3611 ','CSCE',NULL,3,3.0,'Digital Signal Processing'),('CSCE 401/4503','CSCE',NULL,3,3.8,'Internet-based Information Systems'),('CSCE 422/4201 ','CSCE',NULL,3,4.0,'Theory of Computing '),('CSCE 427/4602','CSCE',NULL,3,3.7,'Introduction to Artificial Neural Networks'),('CSCE 432/4301 ','CSCE',NULL,3,3.5,'Embedded Systems'),('CSCE 435/3312 ','CSCE',NULL,3,3.0,'Computer Networks'),('CSCE 436L/4314','CSCE',NULL,1,3.5,'Local Area Networks Lab'),('CSCE 437/4313 ','CSCE',NULL,3,4.0,'Local and Metropolitan Area Networks'),('CSCE 438L/4302 ','CSCE',NULL,1,2.0,'Embedded Systems Lab'),('CSCE 439L/3313','CSCE',NULL,1,4.0,'Computer Networks Lab'),('CSCE 441/4701 ','CSCE',NULL,3,3.0,'Object-Oriented Analysis and Design'),('CSCE 445/4411 ','CSCE',NULL,3,3.0,'Fundamentals of Distributed Systems '),('CSCE 446/4421 ','CSCE',NULL,3,4.5,'Computer Security'),('CSCE 447/4101 ','CSCE',NULL,3,3.0,'Compiler Design '),('CSCE 448/4702 ','CSCE',NULL,3,3.5,'Secure Systems Engineering '),('CSCE 453/4501','CSCE',NULL,3,3.7,'Database Systems'),('CSCE 455/4621 ','CSCE',NULL,3,4.0,'Computer Graphics '),('CSCE 456/4502','CSCE',NULL,3,4.0,'Design of Web-based Systems'),('CSCE 465/3601 ','CSCE',NULL,3,3.5,'Fundamentals of Artificial Intelligence'),('CSCE 485/4930 ','CSCE',NULL,3,3.8,'Selected Topics in Computer Science and Engineering'),('CSCE 490/4950 ','CSCE',NULL,1,4.5,'Industrial Training'),('CSCE 491/4980 ','CSCE',NULL,1,4.0,'Senior Project I '),('CSCE 492/4981 ','CSCE',NULL,2,3.7,'Senior Project II '),('CSCE 495/4910 ','CSCE',NULL,3,4.0,'Guided Studies in Computer Science and Engineering'),('CSCE 525/5221','CSCE',NULL,3,2.8,'Algorithms and Complexity Theory '),('CSCE 527/5262','CSCE',NULL,3,3.0,'Neural Networks and Genetic Algorithms'),('CSCE 529/5222','CSCE',NULL,3,4.0,'Design and Analysis of Parallel Algorithms'),('CSCE 530/5231','CSCE',NULL,3,4.4,'Advanced Processor Architecture'),('CSCE 532/5242','CSCE',NULL,3,3.6,'Parallel Computer Architecture'),('CSCE 535/5232','CSCE',NULL,3,3.0,'Advanced Network Modelling'),('CSCE 545/5241','CSCE',NULL,3,4.2,'Distributed Systems'),('CSCE 565/5261','CSCE',NULL,3,4.5,'Advanced Artificial Intelligence'),('FINC 000/5230 ','FINC',NULL,3,3.0,'Statistical and numerical methods'),('FINC 000/5320 ','FINC',NULL,3,4.2,'Financial Computing'),('FINC 303/2101','FINC',NULL,3,5.0,'Business Finance I'),('FINC 404/3201','FINC',NULL,3,4.3,'Investment Analysis'),('FINC 405/3401','FINC',NULL,3,4.3,'Applied Banking'),('FINC 512/5313 ','FINC',NULL,3,2.5,'Options and Derivatives'),('FINC 513/5331 ','FINC',NULL,3,3.0,'Fixed Income Securities'),('FINC 514/5353 ','FINC',NULL,3,2.9,'Financial Risk Analysis'),('FINC 516/5314 ','FINC',NULL,3,4.0,'Real Estate Finance'),('FINC 517/5352 ','FINC',NULL,3,4.8,'Financial Modeling'),('FINC 518/5315 ','FINC',NULL,3,4.5,'Islamic Finance'),('FINC 527/5201 ','FINC',NULL,3,4.0,'Managerial Economics'),('FINC 535/5204 ','FINC',NULL,3,5.0,'Applied Financial Econometrics'),('FINC 540/5202 ','FINC',NULL,3,4.5,'Financial Management'),('FINC 541/5203','FINC',NULL,3,3.0,'Investments and Portfolio Management'),('FINC 542/5311 ','FINC',NULL,3,3.5,'International Financial Management'),('FINC 543/5312 ','FINC',NULL,3,4.0,'Financial Institutions and Markets'),('FINC 544/5351 ','FINC',NULL,3,3.0,'Advanced Corporate Finance'),('FINC 545/5333 ','FINC',NULL,3,4.0,'Private Equity and Venture Capital'),('FINC 570/5370 ','FINC',NULL,3,3.0,'Selected Topics in Financial Management'),('FINC 575/5375 ','FINC',NULL,3,3.8,'Independent Study in Financial Management '),('FINC 590/5402 ','FINC',NULL,3,3.8,'Research Methodology'),('FINC 599/5401','FINC',NULL,9,4.0,'Thesis');
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
  `Department` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instructors`
--

LOCK TABLES `Instructors` WRITE;
/*!40000 ALTER TABLE `Instructors` DISABLE KEYS */;
INSERT INTO `Instructors` VALUES ('900032789','Amr ','Hassanein','Construction'),('900111865','Islam ','Azzam','Management'),('900112383','Nouri','Sakr','Computer Science and Engineering'),('900122211','Tamer','El Batt','Computer Science and Engineering'),('900122544','Ahmed','Rafea','Computer Science and Engineering'),('900132415','Tarek','Ibrahim Eldomiaty','Management'),('900138965','Nourhan','Eid','Management'),('900139850','Ahmed','Sabry Abou-Zaid','Economics'),('900142098','Rim ','Chérif','Management'),('900145327','Howaida','Ismail','Computer Science and Engineering'),('900150987','Eskandar ','Tooma','Management'),('900153788','Moustafa','Amin Youssef','Computer Science and Engineering'),('900154324','Sally','El Ghamrawy','Computer Science and Engineering'),('900154326','Mohamed','Sedky','Computer Science and Engineering'),('900155263','Sherif','El-Kassas','Computer Science and Engineering'),('900162232','Hossam','Sharara','Computer Science and Engineering'),('900164321','Mohamed','Shalan','Computer Science and Engineering'),('900176752','Amr ','El Mougy','Computer Science and Engineering'),('900189992','Sherif','Aly','Computer Science and Engineering'),('900198277','Cherif ','Salama','Computer Science and Engineering'),('900201100','Alia ','El Bolock','Computer Science and Engineering'),('900210389','Wael ','Abdallah','Management'),('900211827','Amr ','El-Kadi','Computer Science and Engineering'),('900212233','Mohamed','Moustafa','Computer Science and Engineering'),('900217666','Mikhail ','Mikhail','Computer Science and Engineering'),('900221448','Seif ','Eldawlatly','Computer Science and Engineering'),('900223121','Amr ','Goneid','Computer Science and Engineering'),('900230443','Marina ','Apaydin','Management'),('900233638','Jasmin ','Fouad','Management'),('900237980','Hakim ','Meshreki','Management'),('900238986','Medhat ','Hassanein','Management');
/*!40000 ALTER TABLE `Instructors` ENABLE KEYS */;
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
  PRIMARY KEY (`CRN`,`Inst_ID`),
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
INSERT INTO `Teach` VALUES ('CSCE 000/2211','900223121','Fall 2023'),('CSCE 000/4604 ','900153788','Fall 2023'),('CSCE 106/1001','900112383','Fall 2023'),('CSCE 106/1001','900145327','Fall 2023'),('CSCE 106/1001','900201100','Fall 2023'),('CSCE 106/1001','900217666','Fall 2023'),('CSCE 110/1101 ','900145327','Fall 2023'),('CSCE 110/1101 ','900176752','Fall 2023'),('CSCE 230/2301 ','900164321','Fall 2023'),('CSCE 231/2303','900198277','Fall 2023'),('CSCE 253/2501 ','900162232','Fall 2023'),('CSCE 321/2202 ','900112383','Fall 2023'),('CSCE 330/3301','900198277','Fall 2023'),('CSCE 337/3304 ','900164321','Fall 2023'),('CSCE 341/3701 ','900154324','Fall 2023'),('CSCE 341/3701 ','900189992','Fall 2023'),('CSCE 345/3401','900211827','Fall 2023'),('CSCE 435/3312 ','900122211','Fall 2023'),('CSCE 490/4950 ','900162232','Fall 2023');
/*!40000 ALTER TABLE `Teach` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 22:08:05