import Book from "./Book";
import User from "./User";

export default class Student extends User {
  constructor(id: number, name: string, email: string, password: string) {
    super(id, name, email, password);
  }

  reserveBook(book: Book): void {
    book.reserve();
  }
}
