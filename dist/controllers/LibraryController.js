"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Library_1 = __importDefault(require("../models/Library"));
class LibraryController {
    constructor(datacenter) {
        this.datacenter = datacenter;
        // Crie uma biblioteca quando o LibraryController é instanciado
        const defaultLibrary = this.createNewLibrary(1);
        this.registerNewLibrary(defaultLibrary);
    }
    createNewLibrary(id) {
        return new Library_1.default(id);
    }
    registerNewLibrary(library) {
        this.datacenter.addNewLibrary(library);
    }
    listAllLibraries() {
        console.log(this.datacenter.library);
    }
    addBookToLibrary(library, book) {
        library.addBook(book);
    }
    removeBookFromLibrary(library, id) {
        library.removeBook(id);
    }
    editBookInLibrary(library, id, title, category, isAvailable) {
        library.editBook(id, title, category, isAvailable);
    }
}
exports.default = LibraryController;
