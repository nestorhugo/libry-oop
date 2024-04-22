"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Library {
    constructor(id) {
        this.books = [];
        this.id = id;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    listBooks() {
        return this.books;
    }
    editBook(id, title, category, isAvailable) {
        const book = this.books.find((book) => book.id === id);
        if (book) {
            book.title = title;
            book.category = category;
            book.isAvailable = isAvailable;
        }
    }
}
exports.default = Library;
