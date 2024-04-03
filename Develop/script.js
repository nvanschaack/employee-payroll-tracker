// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// TODO: Get user input to create and return an array of employee objects
// This function will allow a user to add multiple employees to display on the page. The user will need to enter the first name, last name, and salary of each employee, then have the option to keep adding employees until they choose to stop. A while loop will be needed here (MDN Web Docs on while loopsLinks to an external site.) The salary will need to be entered as a number, otherwise it should default to $0.
// const collectEmployees = function () {

function collectEmployees () {
  const allEmployees = []
  let dontStop = true

  while (dontStop) {
    const firstName = prompt(`First Name`);
    const lastName = prompt(`Last Name`);
    const salary = parseInt(prompt(`Salary`));
    if (isNaN(salary)) {
      salary = 0
    }

    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    }

    allEmployees.push(newEmployee)

    dontStop = confirm('Would you like to add another employee?')

  }

  return allEmployees

}

  // TODO: Calculate and display the average salary
  // This function will take in the generated array of employees and log the average salary and number of employees to the console. You should use a template literal string for this task.

const displayAverageSalary = function (employeesArray) {

  let someSum = 0

  for (let i = 0; i < employeesArray.length; i++) {
    someSum = someSum + employeesArray[i].salary
  }

  const avr = someSum / employeesArray.length

  console.log(employeesArray.length);
  console.log(avr);
}

  // TODO: Select and display a random employee
  // This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console. The built in Math object can help with random number generation: (MDN Web Docs on Math.randomLinks to an external site.

const getRandomEmployee = function (employeesArray) {

  const randomIndex = Math.floor(Math.random() * employeesArray.length)
  console.log(employeesArray[randomIndex]);
  console.log(`Congradulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
