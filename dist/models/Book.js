"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, category, isAvailable = true) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.isAvailable = isAvailable;
        this.library = null;
    }
    setLibrary(library) {
        this.library = library;
    }
    getLibrary() {
        return this.library;
    }
    setTitle(title) {
        this.title = title;
    }
    // Método para definir a categoria do livro
    setCategory(category) {
        this.category = category;
    }
    getTitle() {
        return this.title;
    }
    getCategory() {
        return this.category;
    }
    reserve() {
        if (this.isAvailable) {
            this.isAvailable = false;
        }
        else {
            throw new Error("This book is not available for reservation");
        }
    }
    release() {
        if (!this.isAvailable) {
            this.isAvailable = true;
        }
        else {
            throw new Error("This book was not reserved");
        }
    }
}
exports.default = Book;
