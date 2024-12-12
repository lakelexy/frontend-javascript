// subjects/Cpp.ts
import { Subject } from './Subject';  // Import Subject class
import { Teacher } from './Teacher';  // Import Teacher interface

export class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
