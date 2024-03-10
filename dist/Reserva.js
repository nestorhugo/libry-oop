"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reserva {
    constructor(id, livro, usuario, dataReserva) {
        this.id = id;
        this.livro = livro;
        this.usuario = usuario;
        this.dataReserva = dataReserva;
        this.status = "Pendente";
    }
    cancelar() {
        if (this.status !== "Pendente") {
            throw new Error("A reserva não pode ser cancelada");
        }
        this.livro.cancelarReserva(this);
        this.status = "Cancelada";
    }
    confirmar() {
        if (this.status !== "Pendente") {
            throw new Error("A reserva não pode ser confirmada");
        }
        this.livro.confirmarReserva(this);
        this.status = "Confirmada";
    }
}
exports.default = Reserva;
