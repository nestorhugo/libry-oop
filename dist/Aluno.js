"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Aluno extends Usuario_1.default {
    constructor(id, nome, email) {
        super(id, nome, email);
        this.permissao = "Aluno";
    }
    verificarEmprestimos() {
        return this.livrosEmprestados;
    }
}
exports.default = Aluno;
