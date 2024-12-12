var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience) {
            this.yearsOfExperience = yearsOfExperience;
        }
    }
    return Teacher;
}());
// Example usage of the Directors interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Example usage of printTeacher
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Implementing the class
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage of StudentClass
var student1 = new StudentClass({ firstName: "Jane", lastName: "Doe" });
console.log(student1.displayName()); // Output: Jane
console.log(student1.workOnHomework()); // Output: Currently working
