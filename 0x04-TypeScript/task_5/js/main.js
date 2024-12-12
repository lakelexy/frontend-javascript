"use strict";
// task_5/js/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "".concat(subject1.brand, " & ").concat(subject2.brand)
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "".concat(subject1.brand, " & ").concat(subject2.brand)
    };
}
// Example usage:
var majorSubject1 = { credits: 4, brand: "CS101" };
var majorSubject2 = { credits: 3, brand: "CS102" };
var minorSubject1 = { credits: 2, brand: "Math101" };
var minorSubject2 = { credits: 1, brand: "Math102" };
console.log(sumMajorCredits(majorSubject1, majorSubject2)); // Output: { credits: 7, brand: 'CS101 & CS102' }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // Output: { credits: 3, brand: 'Math101 & Math102' }
