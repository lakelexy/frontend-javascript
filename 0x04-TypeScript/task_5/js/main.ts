// task_5/js/main.ts

// Interface for MajorCredits
export interface MajorCredits {
  credits: number;
  brand: string;
}

// Interface for MinorCredits
export interface MinorCredits {
  credits: number;
  brand: string;
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: `${subject1.brand} & ${subject2.brand}`
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: `${subject1.brand} & ${subject2.brand}`
  };
}

// Example usage:

const majorSubject1: MajorCredits = { credits: 4, brand: "CS101" };
const majorSubject2: MajorCredits = { credits: 3, brand: "CS102" };

const minorSubject1: MinorCredits = { credits: 2, brand: "Math101" };
const minorSubject2: MinorCredits = { credits: 1, brand: "Math102" };

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // Output: { credits: 7, brand: 'CS101 & CS102' }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // Output: { credits: 3, brand: 'Math101 & Math102' }
