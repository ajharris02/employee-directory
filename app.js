import express from "express";
import employees from "#db/employees";
import e from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res, next) => {
  res.send(employees);
});
app.get("/employees/random", (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.send(randomEmployee);
});

app.get(`/employees/:id`, (req, res, next) => {
  const { id } = req.params;

  const employee = employees.find((e) => {
    return e.id === +id;
  });
  if (!employee) {
    res.status(404).send("No employee found");
  }
  res.send(employee);
});

export default app;
