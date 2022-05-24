const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const clear=document.querySelector(".Clear");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const numberInput = studentForm["number"];

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, number) => {
  students.push({
    name,
    age,
    number,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, number };
};

const createStudentElement = ({ name, age, number }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentnumber = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentnumber.innerText = "Student Group Number: " + "P"+number;

  // Add To Page
  studentDiv.append(studentName, studentAge, studentnumber);
  studentsContainer.appendChild(studentDiv);
};


students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    numberInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  numberInput.value = "";
};

clear.addEventListener('click',function Clear() {
console.log("asd");
localStorage.clear();
studentsContainer.remove();
});
