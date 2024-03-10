"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emprestimo {
    constructor(id, livro, usuario, dataEmprestimo, dataDevolucaoPrevista, dataDevolucao) {
        this.id = id;
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
        this.dataDevolucao = dataDevolucao;
    }
    verificarStatus() {
        if (this.dataDevolucao) {
            return "Devolvido";
        }
        else {
            return "Não devolvido";
        }
    }
}
exports.default = Emprestimo;
