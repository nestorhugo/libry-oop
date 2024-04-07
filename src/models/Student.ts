import Book from "./Book";
import User from "./User";

export default class Student extends User {
  constructor(id: number, name: string) {
    super(id, name);
  }

  reserveBook(book: Book): void {
    book.reserve();
  }
}
