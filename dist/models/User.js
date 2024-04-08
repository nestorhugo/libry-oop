"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    listBooksByCategory(library, category) {
        return library.listBooks().filter((book) => book.category === category);
    }
}
exports.default = User;
