import Book from "./Book";
import Library from "./Library";
import User from "./User";

export default class Librarian extends User {
  constructor(id: number, name: string, email: string, password: string) {
    super(id, name, email, password);
  }

  addBook(library: Library, book: Book): void {
    library.addBook(book);
  }

  removeBook(library: Library, id: number): void {
    library.removeBook(id);
  }

  editBook(
    library: Library,
    id: number,
    title: string,
    category: string,
    isAvailable: boolean
  ): void {
    library.editBook(id, title, category, isAvailable);
  }

  confirmReservation(book: Book): void {
    book.release();
  }
}
