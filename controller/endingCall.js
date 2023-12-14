const data = require("../data.json");

const names = (req, res) => {
  const employeeName = data.employees.map((employee) => employee.name);
  res.json(employeeName);
};

const designation = (req, res) => {
  const employeeDesignation = data.employees.map(
    (employee) => employee.designation
  );
  res.json(employeeDesignation);
};

module.exports = { names, designation };
