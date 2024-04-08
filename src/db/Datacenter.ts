import Book from "../models/Book";
import Library from "../models/Library";
import Student from "../models/Student";
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
export default class Datacenter {
  public books: Book[] = [];
  public library: Library[] = [];
  public student: Student[] = [];

  // 👇👇Books!

  public addNewBook(food: Book): void {
    this.books.push(food);
  }

  public removeBook(id: number): boolean {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }

  public editBook(id: number, bookData: Partial<Book>): Book | null {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      Object.assign(book, bookData);
      return book;
    }
    return null;
  }

  public getBookSize(): number {
    return this.books.length;
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
