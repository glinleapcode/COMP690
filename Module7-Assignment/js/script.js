// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById("addForm");
let selectedTable = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById("empCount");
let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  const id = document.getElementById("id");
  const name = document.getElementById("name");
  const ext = document.getElementById("extension");
  const email = document.getElementById("email");
  const department = document.getElementById("department");
  //   console.log(`ID: ${id.value}`);
  //   console.log(`Name: ${name.value}`);
  //   console.log(`Ext: ${ext.value}`);
  //   console.log(`Email: ${email.value}`);
  //   console.log(`Department: ${department.value}`);

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let row = selectedTable.insertRow();
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  const cellId = row.insertCell();
  const cellName = row.insertCell();
  const cellExt = row.insertCell();
  const cellEmail = row.insertCell();
  const cellDept = row.insertCell();
  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cellId.appendChild(document.createTextNode(id.value));
  cellName.appendChild(document.createTextNode(name.value));
  cellExt.appendChild(document.createTextNode(ext.value));
  cellEmail.appendChild(document.createTextNode(email.value));
  cellDept.appendChild(document.createTextNode(department.value));

  // CREATE THE DELETE BUTTON
  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger";
  delBtn.innerText = "X";
  const cellDel = row.insertCell();
  cellDel.appendChild(delBtn);

  // RESET THE FORM
  form.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  id.focus();
  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  employeeCount++;
  empCount.innerText = employeeCount;
});

// DELETE EMPLOYEE
selectedTable.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    const rowToDelete = e.target.closest("tr");
    if (confirm("Are you sure you want to delete this employee?")) {
      rowToDelete.remove();
      employeeCount--;
      empCount.innerText = employeeCount;
    }
  }
});
