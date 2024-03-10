"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
        this.livrosReservados = [];
    }
    pegarEmprestado(livro) {
        livro.emprestar(this);
        this.livrosEmprestados.push(livro);
    }
    devolverLivro(livro) {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index === -1) {
            throw new Error("Este livro não foi emprestado por este usuário");
        }
        livro.devolver();
        this.livrosEmprestados.splice(index, 1);
    }
    reservarLivro(livro) {
        livro.reservar(this);
        this.livrosReservados.push(livro);
    }
}
exports.default = Usuario;
