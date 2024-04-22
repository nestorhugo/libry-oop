"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
class Datacenter {
    constructor() {
        this.books = [];
        this.library = [];
        this.student = [];
    }
    // 👇👇Books!
    addNewBook(food) {
        this.books.push(food);
    }
    removeBook(id) {
        const index = this.books.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
    editBook(id, bookData) {
        const book = this.books.find((book) => book.id === id);
        if (book) {
            Object.assign(book, bookData);
            return book;
        }
        return null;
    }
    getBookSize() {
        return this.books.length;
    }
    // 👇👇Library!
    addNewLibrary(library) {
        this.library.push(library);
    }
    removeLibrary(id) {
        this.library.splice(id, 1);
    }
    getLibrarySize() {
        return this.library.length;
    }
    getLibraryById(id) {
        for (let library of this.library) {
            if (library.id === id) {
                return library;
            }
        }
        return null;
    }
    // 👇👇Students!
    addNewStudent(student) {
        this.student.push(student);
    }
    removeStudent(id) {
        this.student.splice(id, 1);
    }
    getStudentSize() {
        return this.student.length;
    }
}
exports.default = Datacenter;
