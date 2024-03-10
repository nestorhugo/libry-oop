import Usuario from "./Usuario";
import Reserva from "./Reserva";

enum StatusLivro {
  Disponivel = "D",
  Reservado = "R",
  Emprestado = "E",
}

class Livro {
  id: number;
  titulo: string;
  autor: string;
  anoPublicado: number;
  isnb: string;
  quantidadeDisponivel: number;
  status: StatusLivro;
  reservas: Reserva[] = [];

  constructor(
    id: number,
    titulo: string,
    autor: string,
    anoPublicado: number,
    isnb: string,
    quantidadeDisponivel: number,
    status: StatusLivro = StatusLivro.Disponivel
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicado = anoPublicado;
    this.isnb = isnb;
    this.quantidadeDisponivel = quantidadeDisponivel;
    this.status = status;
  }

  verificarStatus() {
    return this.status;
  }

  emprestar(usuario: Usuario) {
    if (this.status !== StatusLivro.Disponivel) {
      throw new Error("Livro não está disponível para empréstimo");
    }
    if (this.quantidadeDisponivel === 0) {
      throw new Error("Não há mais cópias deste livro disponíveis");
    }
    this.status = StatusLivro.Emprestado;
    this.quantidadeDisponivel--;
    usuario.pegarEmprestado(this);
  }

  devolver() {
    if (this.status !== StatusLivro.Emprestado) {
      throw new Error("Livro não está emprestado");
    }
    this.status = StatusLivro.Disponivel;
    this.quantidadeDisponivel++;
  }

  reservar(usuario: Usuario) {
    if (this.status !== StatusLivro.Disponivel) {
      throw new Error("Livro não está disponível para reserva");
    }
    this.status = StatusLivro.Reservado;
    usuario.reservarLivro(this);
  }

  cancelarReserva(reserva: Reserva) {
    const index = this.reservas.indexOf(reserva);
    if (index === -1) {
      throw new Error("Esta reserva não existe para este livro");
    }
    this.reservas.splice(index, 1);
    if (this.reservas.length === 0 && this.status === StatusLivro.Reservado) {
      this.status = StatusLivro.Disponivel;
    }
  }

  confirmarReserva(reserva: Reserva) {
    const index = this.reservas.indexOf(reserva);
    if (index === -1) {
      throw new Error("Esta reserva não existe para este livro");
    }
    this.status = StatusLivro.Reservado;
  }
}
export default Livro;
