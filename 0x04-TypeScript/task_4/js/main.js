"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var Cpp_1 = require("./subjects/Cpp");
var React_1 = require("./subjects/React");
var Java_1 = require("./subjects/Java");
// Create and export a teacher object (cTeacher)
var teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 10 };
// Create instances of each class
var cppSubject = new Cpp_1.Cpp();
var reactSubject = new React_1.React();
var javaSubject = new Java_1.Java();
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
