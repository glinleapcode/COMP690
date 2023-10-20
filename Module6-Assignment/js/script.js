// Method1: use defer in html script tag to ensure the JS code is executed only after the page finishes loading
const form = document.getElementById('empForm');
const id = document.getElementById('id');
const name = document.getElementById('name');
const ext = document.getElementById('ext');
const email = document.getElementById('email');
const department = document.getElementById('department');
const submit = document.getElementById('submit');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`ID: ${id.value}`)
    console.log(`Name: ${name.value}`)
    console.log(`Ext: ${ext.value}`)
    console.log(`Email: ${email.value}`)
    console.log(`Department: ${department.value}`)
});








