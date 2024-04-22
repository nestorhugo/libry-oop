"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../models/Book"));
const Library_1 = __importDefault(require("../models/Library"));
// Crie uma biblioteca
const library = new Library_1.default(1);
// Crie três livros
const book1 = new Book_1.default(1, "The Great Gatsby", "Fiction", true);
const book2 = new Book_1.default(2, "To Kill a Mockingbird", "Fiction", true);
const book3 = new Book_1.default(3, "1984", "Fiction", true);
// Associe os livros à biblioteca
book1.setLibrary(library);
book2.setLibrary(library);
book3.setLibrary(library);
// Adicione os livros à biblioteca
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
