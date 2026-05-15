let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  students.push({ name, email });
  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();
  this.reset();
});

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

function editStudent(index) {
  let student = students[index];

  document.getElementById("name").value = student.name;
  document.getElementById("email").value = student.email;

  students.splice(index, 1);
}

displayStudents();