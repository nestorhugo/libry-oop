import Datacenter from "../db/Datacenter";
import Library from "../model/Library";
import Book from "../model/Book";

export default class LibraryController {
  private datacenter: Datacenter;

  constructor(datacenter: Datacenter) {
    this.datacenter = datacenter;
  }

  public getNewLibrary(): Library {
    return new Library();
  }

  public registerNewLibrary(library: Library) {
    this.datacenter.addNewLibrary(library);
  }

  public listAllLibraries(): void {
    console.log(this.datacenter.library);
  }

  public addBookToLibrary(library: Library, book: Book): void {
    library.addBook(book);
  }

  public removeBookFromLibrary(library: Library, id: number): void {
    library.removeBook(id);
  }

  public editBookInLibrary(
    library: Library,
    id: number,
    title: string,
    category: string,
    isAvailable: boolean
  ): void {
    library.editBook(id, title, category, isAvailable);
  }
}
