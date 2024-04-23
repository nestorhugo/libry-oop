import { Request, Response } from "express";
import Datacenter from "../db/Datacenter";
import Student from "../models/Student";

export default class StudentController {
  private datacenter: Datacenter;

  constructor(datacenter: Datacenter) {
    this.datacenter = datacenter;
  }

  public createStudent(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const id = this.datacenter.student.length + 1;
    const student = this.createNewStudent(id, name, email, password);
    this.registerNewStudent(student);
    res.status(201).send(student);
  }

  public getStudents(req: Request, res: Response) {
    const students = this.datacenter.student;
    res.status(200).send(students);
  }

  private createNewStudent(
    id: number,
    name: string,
    email: string,
    password: string
  ): Student {
    return new Student(id, name, email, password);
  }

  private registerNewStudent(student: Student) {
    this.datacenter.addNewStudent(student);
  }
}
