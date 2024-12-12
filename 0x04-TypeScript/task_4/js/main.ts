// main.ts
import { Cpp } from './subjects/Cpp';
import { React } from './subjects/React';
import { Java } from './subjects/Java';
import { Teacher } from './subjects/Teacher';  // Import Teacher interface

// Create and export a teacher object (cTeacher)
const teacher: Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };

// Create instances of each class
const cppSubject = new Cpp();
const reactSubject = new React();
const javaSubject = new Java();

// Set the teacher for each subject
cppSubject.setTeacher(teacher);
reactSubject.setTeacher(teacher);
javaSubject.setTeacher(teacher);

// Log and Test for Cpp subject
console.log('C++');
console.log(cppSubject.getRequirements()); // Should show Cpp requirements
console.log(cppSubject.getAvailableTeacher()); // Should show the available teacher

// Log and test for React subject
console.log('React');
console.log(reactSubject.getRequirements()); // Should show React requirements
console.log(reactSubject.getAvailableTeacher()); // Should show the available teacher

// Log and test for Java subject
console.log('Java');
console.log(javaSubject.getRequirements()); // Should show Java requirements
console.log(javaSubject.getAvailableTeacher()); // Should show the available teacher
