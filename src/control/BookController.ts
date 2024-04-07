import Datacenter from "../db/Datacenter";
import Book from "../model/Book";

export default class BookController {
  private datacenter: Datacenter;

  constructor(datacenter: Datacenter) {
    this.datacenter = datacenter;
  }

  public getNewBook(id: number, title: string, category: string): Book {
    return new Book(id, title, category);
  }

  public registerNewBook(book: Book) {
    this.datacenter.addNewBook(book);
  }

  public listAllBooks(): void {
    console.log(this.datacenter.book);
  }
}
