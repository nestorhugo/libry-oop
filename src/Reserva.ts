import Livro from "./Livro";
import Usuario from "./Usuario";

class Reserva {
  id: number;
  livro: Livro;
  usuario: Usuario;
  dataReserva: Date;
  status: "Pendente" | "Confirmada" | "Cancelada";

  constructor(id: number, livro: Livro, usuario: Usuario, dataReserva: Date) {
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

export default Reserva;
