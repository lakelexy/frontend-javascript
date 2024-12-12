// Director class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Type guard function to check if the employee is a Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Function to execute work depending on the type of employee
function executeWork(employee) {
    if (isDirector(employee)) {
        // If the employee is a Director, call workDirectorTasks
        console.log(employee.workDirectorTasks());
    }
    else {
        // Otherwise, assume the employee is a Teacher and call workTeacherTasks
        console.log(employee.workTeacherTasks());
    }
}
// Create Employee function (as described earlier)
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher(); // Return Teacher instance if salary is less than 500
    }
    else {
        return new Director(); // Return Director instance otherwise
    }
}
// Test the executeWork function with different salary values
executeWork(createEmployee(200)); // Expected Output: "Getting to work"
executeWork(createEmployee(1000)); // Expected Output: "Getting to director tasks"
// Function that takes todayClass as an argument and returns a string based on the class type
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    return ''; // Fallback, though this case should never occur because of the type constraint
}
// Test cases for teachClass function
console.log(teachClass('Math')); // Expected output: Teaching Math
console.log(teachClass('History')); // Expected output: Teaching History
