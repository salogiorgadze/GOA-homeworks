const form = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
        name: form.name.value,
        surname: form.surname.value,
        age: form.age.value,
        grade: form.grade.value,
        subject: form.subject.value
    };

    addStudentToTable(student);
    form.reset();
});

function addStudentToTable(student) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.surname}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>${student.subject}</td>
    `;

    tableBody.appendChild(tr);
}
