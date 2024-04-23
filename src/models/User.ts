import bcrypt from "bcrypt";
import Book from "./Book";
import Library from "./Library";

export default class User {
  public id: number;
  public name: string;
  public email: string;
  private passwordHash: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = this.hashPassword(password);
  }

  private hashPassword(password: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  public checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.passwordHash);
  }

  listBooksByCategory(library: Library, category: string): Book[] {
    return library.listBooks().filter((book) => book.category === category);
  }

  toJSON() {
    const { passwordHash, ...rest } = this;
    return rest;
  }
}
