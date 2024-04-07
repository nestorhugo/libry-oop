"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../model/Book"));
class BookController {
    constructor(datacenter) {
        this.datacenter = datacenter;
    }
    getNewBook(id, title, category) {
        return new Book_1.default(id, title, category);
    }
    registerNewBook(book) {
        this.datacenter.addNewBook(book);
    }
    listAllBooks() {
        console.log(this.datacenter.book);
    }
}
exports.default = BookController;
