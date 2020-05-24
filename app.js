var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Brandon94",
    database: "employees_db"
  });
  
    // Use this to connect to the connection. Make sure to have a call back connection.
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
    //connection.end();
  });
  
  // This is how you would call a query
  function afterConnection() {
      inquirer.prompt([
          {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View ALL Employees",
                "View ALL Employees By Department",
                "View ALL Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View ALL Roles",
                "Exit"
            ]
          }
      ]).then(function(answers) {
        console.log(answers.choice);
        switch (answers.choice) {
            case "View ALL Employees":
                console.log("You chose to view all employees");
                viewAllEmployees();
                break;
            case "View ALL Employees By Department":
                console.log("You chose View ALL Employees By Department");
                viewAllEmployeesByDepartment();
                break;
            case "View ALL Employees By Manager":
                console.log("You chose to view all employees by manager")
                viewAllEmployeesByManager();
                break;
            case "Add Employee":
                console.log("You chose to add an employee");
                break;
            case "Remove Employee":
                console.log("You chose to remove an employee");
                break;
            case "Update Employee Role":
                console.log("You chose to update an employee role");
                break;
            case "Update Employee Manager":
                console.log("You chose to update an employee's manager");
                break;
            case "View ALL Roles":
                console.log("You chose to view all roles");
                break;
            case "Exit":
                connection.end();
                break;
        }
      });
  }

  function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      console.log(res);
    });
  }

function viewAllEmployeesByDepartment() {
//create an inquire promt to select from department answer
  inquirer.prompt([
    {
        type: "list",
        name: "department",
        message: "Which department would you like to view?",
        choices: [
          "Software Engineer",
          "Management",
          "Customer Service",
          "Sales"
        ]
    }
  ]).then(function(answers) {
    switch (answers.department) {
      case "Software Engineer":
        connection.query("SELECT * FROM department WHERE id = 1", function (err, res) {
          if (err) throw err;
          console.log("It works!");
          console.log(res);
        });
      break;
      case "Management":
        connection.query("SELECT * FROM department WHERE id = 2", function (err, res) {
          if (err) throw err;
          console.log("It works!");
          console.log(res);
        });
      break;
      case "Customer Service":
        connection.query("SELECT * FROM department WHERE id = 3", function (err, res) {
          if (err) throw err;
          console.log("It works!");
          console.log(res);
        });
      break;
      case "Sales":
        connection.query("SELECT * FROM department WHERE id = 4", function (err, res) {
          if (err) throw err;
          console.log("It works!");
          console.log(res);
        });
      break;
    }
  });
}



//create view all employees by manager
function viewAllEmployeesByManager() {
  //create an inquire promt to select from department answer
    inquirer.prompt([
      {
          type: "list",
          name: "employee_role",
          message: "Which manager would you like to view?",
          choices: [
            "1",
            "2",
            "3",
            "4"
          ]
      }
    ]).then(function(answers) {
      switch (answers.employee_role) {
        case "1":
          connection.query("SELECT * FROM employee_role WHERE title = Manager", function (err, res) {
            if (err) throw err;
            console.log("It works!");
            console.log(res);
          });
        break;
        case "2":
          connection.query("SELECT * FROM employee_role WHERE title = Manager", function (err, res) {
            if (err) throw err;
            console.log("It works!");
            console.log(res);
          });
        break;
        case "3":
          connection.query("SELECT * FROM employee_role WHERE title = Manager", function (err, res) {
            if (err) throw err;
            console.log("It works!");
            console.log(res);
          });
        break;
        case "4":
          connection.query("SELECT * FROM employee_role WHERE title = Manager", function (err, res) {
            if (err) throw err;
            console.log("It works!");
            console.log(res);
          });
        break;
      }
    });
  }







