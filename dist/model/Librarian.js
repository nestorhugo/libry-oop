"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Librarian extends User_1.default {
    constructor(id, name) {
        super(id, name);
    }
    addBook(library, book) {
        library.addBook(book);
    }
    removeBook(library, id) {
        library.removeBook(id);
    }
    editBook(library, id, title, category, isAvailable) {
        library.editBook(id, title, category, isAvailable);
    }
    confirmReservation(book) {
        book.release();
    }
}
exports.default = Librarian;
