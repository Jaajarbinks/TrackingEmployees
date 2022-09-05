-- thanks to lesson 17
INSERT INTO departments(department_name)
  VALUES
   ('Manager'),
   ('Supervisor'),
   ('Lead'),
   ('employee');


INSERT INTO roles(position, department_id, salary)
  VALUES
   ('Head Manager', 1, 89000),
   ('Supervisor',2, 70000),
   ('Lead official', 3, 40000),
   ('Employee', 4, 35000);
    
INSERT INTO employees(role_id, first_name, last_name, employee_id)
 VALUES
  (1, 'Froger', 'Leap', NULL),
  (2, 'Manny', 'Hugging', NULL),
  (3, 'Lappy', 'Lemon', NULL),
  (4, 'Ralph', 'Machio', NUll);


-- SELECT * FROM tracking_employees;