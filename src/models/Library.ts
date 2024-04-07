import Book from "./Book";

export default class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }

  listBooks(): Book[] {
    return this.books;
  }

  editBook(
    id: number,
    title: string,
    category: string,
    isAvailable: boolean
  ): void {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      book.title = title;
      book.category = category;
      book.isAvailable = isAvailable;
    }
  }
}
