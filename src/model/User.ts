import Book from "./Book";
import Library from "./Library";

export default class User {
  constructor(public id: number, public name: string) {}

  listBooksByCategory(library: Library, category: string): Book[] {
    return library.listBooks().filter((book) => book.category === category);
  }
}
