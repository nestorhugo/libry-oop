"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("./Livro"));
const Usuario_1 = __importDefault(require("./Usuario"));
let meuLivro = new Livro_1.default(1, "1984", "George Orwell", 1949, "978-0451524935", 10);
const novoUsuario = new Usuario_1.default(1, "gorge", "gorge@gmail.com");
console.log(novoUsuario);
