// const form = document.getElementById('empForm');
// const id = document.getElementById('id');
// const name = document.getElementById('name');
// const ext = document.getElementById('ext');
// const email = document.getElementById('email');
// const department = document.getElementById('department');
// const submit = document.getElementById('submit');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(`ID: ${id.value}`)
//     console.log(`Name: ${name.value}`)
//     console.log(`Ext: ${ext.value}`)
//     console.log(`Email: ${email.value}`)
//     console.log(`Department: ${department.value}`)
// });

window.addEventListener('load', () => {
    const form = document.getElementById('empForm');
    const id = document.getElementById('id');
    const name = document.getElementById('name');
    const ext = document.getElementById('ext');
    const email = document.getElementById('email');
    const department = document.getElementById('department');
    const submit = document.getElementById('submit');
    const processForm = (e) => {
        e.preventDefault();
        console.log(`ID: ${id.value}`)
        console.log(`Name: ${name.value}`)
        console.log(`Ext: ${ext.value}`)
        console.log(`Email: ${email.value}`)
        console.log(`Department: ${department.value}`)
    };
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        processForm(e);
    })
});







