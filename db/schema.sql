DROP DATABASE IF EXISTS tracking_db;
CREATE DATABASE tracking_db;


USE tracking_db;

-- DROP TABLE IF EXISTS departments;
-- DROP TABLE IF EXISTS employees;
-- DROP TABLE IF EXISTS roles;

-- thanks to lesson 15 & 19 & mini project & picture from assets
-- keep getting error for line 5 but it was at primary key(id),((i had to remove it))
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- had error at department_id cannot set not null
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES  departments(id)
    ON DELETE SET NULL
);

-- had error at role_id cannot set not null
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);
