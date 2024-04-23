"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../models/Student"));
class StudentController {
    constructor(datacenter) {
        this.datacenter = datacenter;
    }
    createStudent(req, res) {
        const { name, email, password } = req.body;
        const id = this.datacenter.student.length + 1;
        const student = this.createNewStudent(id, name, email, password);
        this.registerNewStudent(student);
        res.status(201).send(student);
    }
    getStudents(req, res) {
        const students = this.datacenter.student;
        res.status(200).send(students);
    }
    createNewStudent(id, name, email, password) {
        return new Student_1.default(id, name, email, password);
    }
    registerNewStudent(student) {
        this.datacenter.addNewStudent(student);
    }
}
exports.default = StudentController;
