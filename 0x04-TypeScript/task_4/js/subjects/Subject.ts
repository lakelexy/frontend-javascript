// subjects/Subject.ts
import { Teacher } from './Teacher';

export class Subject {
  teacher: Teacher;

  constructor() {
    this.teacher = { firstName: '', lastName: '' };
  }

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
