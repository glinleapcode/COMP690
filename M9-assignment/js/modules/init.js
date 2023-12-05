async function getEmployees() {
  try {
    let res = await fetch("./data/employees.json");
    let employees = await res.json();
    return employees;
  } catch (err) {
    console.log(err);
  }
}

export { getEmployees };
