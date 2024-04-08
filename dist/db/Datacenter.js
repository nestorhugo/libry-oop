"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
// FoodProduct e CleaningProduct
class Datacenter {
    constructor() {
        this.book = [];
        this.library = [];
        this.student = [];
    }
    // 👇👇Books!
    addNewBook(food) {
        this.book.push(food);
    }
    removeBook(id) {
        const index = this.book.findIndex((livro) => livro.id === id);
        if (index !== -1) {
            this.book.splice(index, 1);
            return true;
        }
        return false;
    }
    getBookSize() {
        return this.book.length;
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
