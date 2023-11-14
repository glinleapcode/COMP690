// CREATE AN ARRAY OF EMPLOYEES

let employees = [];

let initEmployees = [
  [11111111, "Zack Zelda", "1234", "zackzella@gmail.com", "Engineering"],
  [22222222, "Jessica Jones", "2345", "jessicajones@gmail.com", "Executive"],
  [33333333, "Mark Mellow", "3456", "markmellow@gmail.com", "Marketing"],
  [
    44444444,
    "Fred Friendly",
    "4567",
    "fredfriendly@gmail.com",
    "Administrative",
  ],
  [55555555, "Sally Sony", "5678", "sallysony@gmail.com", "Sales"],
];

// localStorage.clear();

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS

// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

if (!localStorage.getItem("employees")) {
  console.log("No employees in local storage");
  employees = initEmployees;
} else {
  // if some data in the local storage, get the data and parse it into an array
  employees = JSON.parse(localStorage.getItem("employees"));
}

// GET DOM ELEMENTS

let form = document.querySelector("#addForm");
let empTable = document.querySelector("#empTable");
let empTableBody = document.querySelector("tbody");
let empCount = document.querySelector("#empCount");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees);

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#name").value;
  let ext = document.querySelector("#extension").value;
  let email = document.querySelector("#email").value;
  let department = document.querySelector("#department").value;

  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  let newEmployee = [id, name, ext, email, department];
  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  employees.push(newEmployee);
  // BUILD THE GRID
  buildGrid();
  // RESET THE FORM
  form.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  document.querySelector("#id").focus();
});

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  // CONFIRM THE DELETE
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this employee?")) {
      // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
      let rowIndex = e.target.closest("tr").rowIndex;
      //   let rowIndex = e.target.parentNode.parentNode.rowIndex;
      console.log(rowIndex);
      // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
      empTable.deleteRow(rowIndex);
      // REMOVE EMPLOYEE FROM ARRAY
      // table row index starts at 1, array index starts at 0
      employees.splice(rowIndex - 1, 1);
      // BUILD THE GRID
      buildGrid();
    }
  }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  empTableBody.innerHTML = "";
  // REBUILD THE TBODY FROM SCRATCH
  // BIND THE TBODY TO THE EMPLOYEE TABLE

  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  employees.forEach((employee) => {
    // REBUILDING THE ROW STRUCTURE
    let row = document.createElement("tr");
    employee.forEach((data) => {
      let cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    });
    // add a delete button to each row
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger delete ";
    deleteBtn.textContent = "X";
    row.appendChild(deleteBtn);
    // add the row to the table body
    empTableBody.appendChild(row);
  });
  // UPDATE EMPLOYEE COUNT
  empCount.textContent = `(${employees.length})`;

  // STORE THE ARRAY IN STORAGE
  // stringify the array and store it in the local storage, will overwrite the existing data
  localStorage.setItem("employees", JSON.stringify(employees));
  //   console.log(employees);
}
