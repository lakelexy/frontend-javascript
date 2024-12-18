/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
// main.ts
// Create two students
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
};
// Create an array of students
var studentsList = [student1, student2];
// Render a table
var table = document.createElement('table');
var tableHeader = document.createElement('thead');
tableHeader.innerHTML = '<tr><th>First Name</th><th>Location</th></tr>';
table.appendChild(tableHeader);
var tableBody = document.createElement('tbody');
// For each student, create a new row in the table
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
// Append the table to the body
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxVQUFVO0FBVVYsc0JBQXNCO0FBQ3RCLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsVUFBVTtDQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLE9BQU87SUFDakIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsYUFBYTtDQUN4QixDQUFDO0FBRUYsOEJBQThCO0FBQzlCLElBQU0sWUFBWSxHQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXJELGlCQUFpQjtBQUNqQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsV0FBVyxDQUFDLFNBQVMsR0FBRywrQ0FBK0MsQ0FBQztBQUN4RSxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9CLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbEQsa0RBQWtEO0FBQ2xELFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQU87SUFDMUIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxHQUFHLENBQUMsU0FBUyxHQUFHLGNBQU8sT0FBTyxDQUFDLFNBQVMsc0JBQVksT0FBTyxDQUFDLFFBQVEsVUFBTyxDQUFDO0lBQzVFLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdCLCtCQUErQjtBQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYWluLnRzXG5cbi8vIERlZmluZSB0aGUgaW50ZXJmYWNlIGZvciBTdHVkZW50XG5pbnRlcmZhY2UgU3R1ZGVudCB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbn1cblxuLy8gQ3JlYXRlIHR3byBzdHVkZW50c1xuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGFnZTogMjAsXG4gIGxvY2F0aW9uOiAnTmV3IFlvcmsnLFxufTtcblxuY29uc3Qgc3R1ZGVudDI6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0phbmUnLFxuICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgYWdlOiAyMixcbiAgbG9jYXRpb246ICdMb3MgQW5nZWxlcycsXG59O1xuXG4vLyBDcmVhdGUgYW4gYXJyYXkgb2Ygc3R1ZGVudHNcbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vIFJlbmRlciBhIHRhYmxlXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5jb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG50YWJsZUhlYWRlci5pbm5lckhUTUwgPSAnPHRyPjx0aD5GaXJzdCBOYW1lPC90aD48dGg+TG9jYXRpb248L3RoPjwvdHI+JztcbnRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuLy8gRm9yIGVhY2ggc3R1ZGVudCwgY3JlYXRlIGEgbmV3IHJvdyBpbiB0aGUgdGFibGVcbnN0dWRlbnRzTGlzdC5mb3JFYWNoKHN0dWRlbnQgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICByb3cuaW5uZXJIVE1MID0gYDx0ZD4ke3N0dWRlbnQuZmlyc3ROYW1lfTwvdGQ+PHRkPiR7c3R1ZGVudC5sb2NhdGlvbn08L3RkPmA7XG4gIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xufSk7XG5cbnRhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG5cbi8vIEFwcGVuZCB0aGUgdGFibGUgdG8gdGhlIGJvZHlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9