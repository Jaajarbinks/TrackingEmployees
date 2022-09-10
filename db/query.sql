SELECT departments.name, roles.salary
FROM departments
JOIN  roles ON roles.department_id = departments.id

