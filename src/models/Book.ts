import Library from "./Library";

export default class Book {
  library: Library | null = null;

  constructor(
    public id: number,
    public title: string,
    public category: string,
    public isAvailable: boolean = true
  ) {}

  setLibrary(library: Library): void {
    this.library = library;
  }

  getLibrary(): Library | null {
    return this.library;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  // Método para definir a categoria do livro
  setCategory(category: string): void {
    this.category = category;
  }

  getTitle(): string {
    return this.title;
  }

  getCategory(): string {
    return this.category;
  }

  reserve(): void {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      throw new Error("This book is not available for reservation");
    }
  }

  release(): void {
    if (!this.isAvailable) {
      this.isAvailable = true;
    } else {
      throw new Error("This book was not reserved");
    }
  }
}
