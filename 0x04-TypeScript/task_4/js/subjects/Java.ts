// subjects/Java.ts
import { Subject } from './Subject';  // Import Subject class
import { Teacher } from './Teacher';  // Import Teacher interface

export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingJava) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
