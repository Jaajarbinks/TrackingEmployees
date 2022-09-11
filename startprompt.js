require('dotenv').config()
const inquirer = require('inquirer')
const logo = require('asciiart-logo')
const mysql = require('mysql2')

// found in lesson 11
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'tracking_db',
  },
  console.log(`Your connected to the database.`),
)

const viewDepartments = () => {
  db.query('SELECT * FROM departments', (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
  console.log('your viewing departments')
}

const viewRoles = () => {
  db.query('SELECT * FROM roles', (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
  console.log('now viewing Roles')
}

const viewEmployees = () => {
  db.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
  console.log('now viewing Employees')
}

const addDepartment = async () => {
  const { department } = await inquirer.prompt([
    {
      name: 'department',
      message: 'what department are you from?',
    },
  ])
  db.query(
    'INSERT INTO departments (name) VALUES (?)',
    department,
    (err, result) => {
      if (err) console.error(err)
      console.log(result)
    },
  )
}

const renderDepartmentIntoChoices = () => {
  return db.promise().query('SELECT * FROM departments')
}

const addRole = async () => {
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) console.error(err)
    const departmentChoices = result.map((department) => {
      return {
        name: department.name,
        value: department.id,
      }
    })
    promptRole(departmentChoices)

    // inquirer
    //   .prompt([
    //     {
    //       name: 'title',
    //       message: 'what is your role title',
    //     },
    //     {
    //       name: 'salary',
    //       message: 'how much do you make here?',
    //     },
    //     {
    //       type: 'list',
    //       message: 'whats your department',
    //       name: 'departmentId',
    //       choices: departments.map(({ name, id }) => {
    //         return {
    //           name,
    //           value: id,
    //         }
    //       }),
    //     },
    //   ])
    //   .then(({ title, salary, departmentId }) => {
    //     db.query(
    //       'INSERT INTO roles (title, salary) VALUES (?, ?)',
    //       [title, salary],
    //       (err) => {
    //         if (err) console.error(err)
    //       },
    //     )
    // })
  })
}

const addEmployee = async () => {
  const { firstName, lastName } = await inquirer.prompt([
    {
      name: 'firstName',
      message: 'the employees first name is',
    },
    {
      name: 'lastName',
      message: 'the employees last name is',
    },
  ])
  db.query(
    'INSERT INTO employees (first_name, last_name) VALUES (?, ?)',
    [firstName, lastName],
    (err, result) => {
      if (err) console.error(err)
    },
  )
}

const updateEmployee = () => {
  console.log('why did you update an employee')
}

const quit = () => {
  console.log('Quitter!')
  process.exit()
}

const choiceMap = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
  quit,
}

const handleChoice = async (choice) => {
  await choiceMap[choice]()
  if (choice !== 'quit') {
    startPrompt()
  }
}

// thanks to office hours
const startPrompt = async () => {
  const result = await inquirer.prompt([
    {
      type: 'list',
      message: 'what do you want to choose',
      name: 'youChoose',
      choices: [
        {
          name: 'view all departments',
          value: 'viewDepartments',
        },
        {
          name: 'view all roles',
          value: 'viewRoles',
        },
        {
          name: 'view all employees',
          value: 'viewEmployees',
        },
        {
          name: 'add a department',
          value: 'addDepartment',
        },
        {
          name: 'add a role',
          value: 'addRole',
        },
        {
          name: 'add an employee',
          value: 'addEmployee',
        },
        {
          name: 'update a employee role',
          value: 'updateEmployee',
        },
        {
          name: 'quit',
          value: 'quit',
        },
      ],
    },
  ])
  handleChoice(result.youChoose)
}

console.log(logo({ name: 'Tracking Employee' }).render())
startPrompt()
