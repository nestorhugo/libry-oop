import Book from "../models/Book";
import Library from "../models/Library";

// Crie uma biblioteca
const library = new Library(1);

// Crie três livros
const book1 = new Book(1, "The Great Gatsby", "Fiction", true);
const book2 = new Book(2, "To Kill a Mockingbird", "Fiction", true);
const book3 = new Book(3, "1984", "Fiction", true);

// Associe os livros à biblioteca
book1.setLibrary(library);
book2.setLibrary(library);
book3.setLibrary(library);

// Adicione os livros à biblioteca
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
