import Datacenter from "../db/Datacenter";
import Library from "../models/Library";
import Book from "../models/Book";

export default class LibraryController {
  private datacenter: Datacenter;

  constructor(datacenter: Datacenter) {
    this.datacenter = datacenter;

    // Crie uma biblioteca quando o LibraryController é instanciado
    const defaultLibrary = this.createNewLibrary(1);
    this.registerNewLibrary(defaultLibrary);
  }

  public createNewLibrary(id: number): Library {
    return new Library(id);
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
