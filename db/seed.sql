-- thanks to lesson 17
INSERT INTO departments (name)
  VALUES
   ('Manager'),
   ('Supervisor'),
   ('Lead'),
   ('employee');


INSERT INTO roles (title, department_id, salary)
  VALUES
   ('Head Manager', 1, 89000),
   ('Supervisor',2, 70000),
   ('Lead official', 3, 40000),
   ('Employee', 4, 35000);
    
    -- keep getting error with the fist_name i spell wrong its first_name
INSERT INTO employees (first_name, last_name, role_id, manager_id)
 VALUES
  ('Froger', 'Leap', 1, NULL),
  ('Manny', 'Hugging', 3, NULL),
  ('Lappy', 'Lemon', 2, NULL),
  ('Ralph', 'Machio', 4, NUll);
