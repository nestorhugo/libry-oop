import Livro from "./Livro";
import Usuario from "./Usuario";

class Reserva {
  id: number;
  livro: Livro;
  usuario: Usuario;
  dataReserva: Date;

  constructor(id: number, livro: Livro, usuario: Usuario, dataReserva: Date) {
    this.id = id;
    this.livro = livro;
    this.usuario = usuario;
    this.dataReserva = dataReserva;
  }
}

export default Reserva;
