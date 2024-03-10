"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./Usuario");
class Administrador extends Usuario_1.default {
    constructor(id, nome, email) {
        super(id, nome, email);
        this.permissao = "Administrador";
        this.biblioteca = [];
    }
    adicionarLivro(livro) {
        this.biblioteca.push(livro);
    }
    removerLivro(livro) {
        const index = this.biblioteca.indexOf(livro);
        if (index === -1) {
            throw new Error("Este livro não está na biblioteca");
        }
        this.biblioteca.splice(index, 1);
    }
}
exports.default = Administrador;
