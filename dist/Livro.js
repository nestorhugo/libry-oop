"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    constructor(id, titulo, autor, anoPublicado, isnb, quantidadeDisponivel) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
        this.isnb = isnb;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
}
exports.default = Livro;
