DROP DATABASE IF EXISTS tracking_db;
CREATE DATABASE tracking_db;


USE tracking_db;

-- DROP TABLE IF EXISTS departments;
-- DROP TABLE IF EXISTS employees;
-- DROP TABLE IF EXISTS roles;

-- thanks to lesson 15 & 19 & mini project
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(55) NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE roles (
    id INT NOT NULL,
    position VARCHAR(55) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES  departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL,
    fist_name VARCHAR(55) NOT NULL,
    last_name VARCHAR(55) NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);
