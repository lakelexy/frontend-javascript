"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject() {
        this.teacher = { firstName: '', lastName: '' };
    }
    Subject.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    return Subject;
}());
exports.Subject = Subject;
