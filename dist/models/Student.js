"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Student extends User_1.default {
    constructor(id, name, email, password) {
        super(id, name, email, password);
    }
    reserveBook(book) {
        book.reserve();
    }
}
exports.default = Student;
