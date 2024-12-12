// subjects/React.ts
import { Subject } from './Subject';  // Import Subject class
import { Teacher } from './Teacher';  // Import Teacher interface

export class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingReact) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
