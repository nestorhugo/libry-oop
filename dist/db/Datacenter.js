"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
// FoodProduct e CleaningProduct
class Datacenter {
    constructor() {
        this.book = [];
    }
    addNewBook(food) {
        this.book.push(food);
    }
    removeBook(id) {
        this.book.splice(id, 1);
    }
    getBookSize() {
        return this.book.length;
    }
}
exports.default = Datacenter;
