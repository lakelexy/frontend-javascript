/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFjQSxnREFBZ0Q7QUFDaEQ7SUFBQTtJQVlBLENBQUM7SUFYQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQsOENBQThDO0FBQzlDO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELDZEQUE2RDtBQUM3RCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM5QyxPQUFRLFFBQXFCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQ2hFLENBQUM7QUFFRCw2REFBNkQ7QUFDN0QsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDL0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeEIsd0RBQXdEO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztLQUMzQztTQUFNO1FBQ0wsd0VBQXdFO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUM7QUFFRCxrREFBa0Q7QUFDbEQsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDN0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM5QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBRSxxREFBcUQ7S0FDN0U7U0FBTTtRQUNMLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLHFDQUFxQztLQUM3RDtBQUNILENBQUM7QUFDRCw2REFBNkQ7QUFDN0QsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUkscUNBQXFDO0FBQzFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFHLCtDQUErQztBQUtwRiw2RkFBNkY7QUFDN0YsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDdEMsSUFBSSxVQUFVLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU8sZUFBZSxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1FBQ25DLE9BQU8sa0JBQWtCLENBQUM7S0FDM0I7SUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLCtFQUErRTtBQUM1RixDQUFDO0FBRUQscUNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBSSxpQ0FBaUM7QUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9DQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEaXJlY3RvckludGVyZmFjZSBkZWZpbml0aW9uXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy8gVGVhY2hlckludGVyZmFjZSBkZWZpbml0aW9uXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8vIERpcmVjdG9yIGNsYXNzIGltcGxlbWVudGluZyBEaXJlY3RvckludGVyZmFjZVxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICB9XG59XG5cbi8vIFRlYWNoZXIgY2xhc3MgaW1wbGVtZW50aW5nIFRlYWNoZXJJbnRlcmZhY2VcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgfVxufVxuXG4vLyBUeXBlIGd1YXJkIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBlbXBsb3llZSBpcyBhIERpcmVjdG9yXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd29yayBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgZW1wbG95ZWVcbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiB2b2lkIHtcbiAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgLy8gSWYgdGhlIGVtcGxveWVlIGlzIGEgRGlyZWN0b3IsIGNhbGwgd29ya0RpcmVjdG9yVGFza3NcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIGFzc3VtZSB0aGUgZW1wbG95ZWUgaXMgYSBUZWFjaGVyIGFuZCBjYWxsIHdvcmtUZWFjaGVyVGFza3NcbiAgICBjb25zb2xlLmxvZyhlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCkpO1xuICB9XG59XG5cbi8vIENyZWF0ZSBFbXBsb3llZSBmdW5jdGlvbiAoYXMgZGVzY3JpYmVkIGVhcmxpZXIpXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTsgIC8vIFJldHVybiBUZWFjaGVyIGluc3RhbmNlIGlmIHNhbGFyeSBpcyBsZXNzIHRoYW4gNTAwXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpOyAvLyBSZXR1cm4gRGlyZWN0b3IgaW5zdGFuY2Ugb3RoZXJ3aXNlXG4gIH1cbn1cbi8vIFRlc3QgdGhlIGV4ZWN1dGVXb3JrIGZ1bmN0aW9uIHdpdGggZGlmZmVyZW50IHNhbGFyeSB2YWx1ZXNcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAgICAvLyBFeHBlY3RlZCBPdXRwdXQ6IFwiR2V0dGluZyB0byB3b3JrXCJcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgICAvLyBFeHBlY3RlZCBPdXRwdXQ6IFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiXG5cbi8vIERlZmluZSBhIHN0cmluZyBsaXRlcmFsIHR5cGUgU3ViamVjdHMgdGhhdCBjYW4gb25seSBiZSAnTWF0aCcgb3IgJ0hpc3RvcnknXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG4vLyBGdW5jdGlvbiB0aGF0IHRha2VzIHRvZGF5Q2xhc3MgYXMgYW4gYXJndW1lbnQgYW5kIHJldHVybnMgYSBzdHJpbmcgYmFzZWQgb24gdGhlIGNsYXNzIHR5cGVcbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICBpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XG4gICAgcmV0dXJuICdUZWFjaGluZyBNYXRoJztcbiAgfSBlbHNlIGlmICh0b2RheUNsYXNzID09PSAnSGlzdG9yeScpIHtcbiAgICByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xuICB9XG4gIHJldHVybiAnJzsgLy8gRmFsbGJhY2ssIHRob3VnaCB0aGlzIGNhc2Ugc2hvdWxkIG5ldmVyIG9jY3VyIGJlY2F1c2Ugb2YgdGhlIHR5cGUgY29uc3RyYWludFxufVxuXG4vLyBUZXN0IGNhc2VzIGZvciB0ZWFjaENsYXNzIGZ1bmN0aW9uXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdNYXRoJykpOyAgICAvLyBFeHBlY3RlZCBvdXRwdXQ6IFRlYWNoaW5nIE1hdGhcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IC8vIEV4cGVjdGVkIG91dHB1dDogVGVhY2hpbmcgSGlzdG9yeVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9