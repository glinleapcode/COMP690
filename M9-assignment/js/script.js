import { getEmployees } from "./modules/init.js";

getEmployees().then((employees) => {
  buildGrid(employees);
});

// GET DOM ELEMENTS
let empTable = document.querySelector("#employees");
let empCount = document.querySelector("#empCount");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// buildGrid(arrEmployees);

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    // CONFIRM THE DELETE
    if (confirm("Are you sure you want to delete this employee?")) {
      // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
      let rowIndex = e.target.parentNode.parentNode.rowIndex;
      // REMOVE EMPLOYEE FROM ARRAY
      empTable.deleteRow(rowIndex);
      // UPDATE EMPLOYEE COUNT
      empCount.value = `(${empTable.rows.length - 1})`; // -1 for the header row
    }
  }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  empTable.lastElementChild.remove();
  // REBUILD THE TBODY FROM SCRATCH
  let tbody = document.createElement("tbody");
  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  for (let employee of employees) {
    tbody.innerHTML += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `;
  }
  // BIND THE TBODY TO THE EMPLOYEE TABLE
  empTable.appendChild(tbody);
  // UPDATE EMPLOYEE COUNT
  empCount.value = `(${employees.length})`;
}
