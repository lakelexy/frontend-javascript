// main.ts

// Define the interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement('table');
const tableHeader = document.createElement('thead');
tableHeader.innerHTML = '<tr><th>First Name</th><th>Location</th></tr>';
table.appendChild(tableHeader);

const tableBody = document.createElement('tbody');

// For each student, create a new row in the table
studentsList.forEach(student => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tableBody.appendChild(row);
});

table.appendChild(tableBody);

// Append the table to the body
document.body.appendChild(table);
