-- create the databases
CREATE DATABASE IF NOT EXISTS eLearning;

-- create the users for each database
CREATE USER 'adminUser'@'%' IDENTIFIED BY 'eLearning';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `eLearning`.* TO 'adminUser'@'%';

FLUSH PRIVILEGES;