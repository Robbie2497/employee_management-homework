DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;


USE employees_db;

CREATE TABLE department (
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee_role (
id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL,
department_id INTEGER,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
id INTEGER AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES employee_role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO employee (first_name, last_name)
VALUES ("John", "Smith");

INSERT INTO department (name)
VALUES ("Software Engineer"), ("Management"), ("Customer Service"), ("Sales");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Manager", ".8", "2");

