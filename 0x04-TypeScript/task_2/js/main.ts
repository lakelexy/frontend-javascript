// DirectorInterface definition
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface definition
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Type guard function to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work depending on the type of employee
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    // If the employee is a Director, call workDirectorTasks
    console.log(employee.workDirectorTasks());
  } else {
    // Otherwise, assume the employee is a Teacher and call workTeacherTasks
    console.log(employee.workTeacherTasks());
  }
}

// Create Employee function (as described earlier)
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();  // Return Teacher instance if salary is less than 500
  } else {
    return new Director(); // Return Director instance otherwise
  }
}
// Test the executeWork function with different salary values
executeWork(createEmployee(200));    // Expected Output: "Getting to work"
executeWork(createEmployee(1000));   // Expected Output: "Getting to director tasks"

// Define a string literal type Subjects that can only be 'Math' or 'History'
type Subjects = 'Math' | 'History';

// Function that takes todayClass as an argument and returns a string based on the class type
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  return ''; // Fallback, though this case should never occur because of the type constraint
}

// Test cases for teachClass function
console.log(teachClass('Math'));    // Expected output: Teaching Math
console.log(teachClass('History')); // Expected output: Teaching History
