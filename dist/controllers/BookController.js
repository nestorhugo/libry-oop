"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../models/Book"));
class BookController {
    constructor(datacenter) {
        this.datacenter = datacenter;
    }
    createBook(req, res) {
        const { id, title, category, libraryId } = req.body;
        const book = this.getNewBook(id, title, category);
        if (libraryId) {
            // Buscar a biblioteca pelo ID
            const library = this.datacenter.getLibraryById(libraryId);
            if (!library) {
                res.status(404).send({ message: "Library not found." });
                return;
            }
            // Associar o livro à biblioteca
            book.setLibrary(library);
        }
        this.registerNewBook(book);
        res.status(201).send(book);
    }
    removeBook(req, res) {
        const { id } = req.params;
        const removed = this.datacenter.removeBook(Number(id));
        if (removed) {
            res.status(200).send({ message: "Book removed successfully." });
        }
        else {
            res.status(404).send({ message: "Book not found." });
        }
    }
    editBook(req, res) {
        const { id } = req.params;
        const bookData = req.body;
        const updatedBook = this.datacenter.editBook(Number(id), bookData);
        if (updatedBook) {
            res.status(200).send(updatedBook);
        }
        else {
            res.status(404).send({ message: "Book not found." });
        }
    }
    getBooks(req, res) {
        const books = this.datacenter.books;
        res.status(200).send(books);
    }
    getNewBook(id, title, category) {
        return new Book_1.default(id, title, category);
    }
    registerNewBook(book) {
        this.datacenter.addNewBook(book);
    }
}
exports.default = BookController;
