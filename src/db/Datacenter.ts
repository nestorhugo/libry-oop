import Book from "../model/Book";
import Library from "../model/Library";
import Student from "../model/Student";
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
// FoodProduct e CleaningProduct
export default class Datacenter {
  public book: Book[] = [];
  public library: Library[] = [];
  public student: Student[] = [];

  // 👇👇Books!

  public addNewBook(food: Book): void {
    this.book.push(food);
  }

  public removeBook(id: number): void {
    this.book.splice(id, 1);
  }

  public getBookSize(): number {
    return this.book.length;
  }

  // 👇👇Library!
  public addNewLibrary(library: Library): void {
    this.library.push(library);
  }

  public removeLibrary(id: number): void {
    this.library.splice(id, 1);
  }

  public getLibrarySize(): number {
    return this.library.length;
  }

  // 👇👇Students!
  public addNewStudent(student: Student): void {
    this.student.push(student);
  }

  public removeStudent(id: number): void {
    this.student.splice(id, 1);
  }

  public getStudentSize(): number {
    return this.student.length;
  }
}
