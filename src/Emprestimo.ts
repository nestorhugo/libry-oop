import Livro from "./Livro";
import Usuario from "./Usuario";

class Emprestimo {
  id: number;
  livro: Livro;
  usuario: Usuario;
  dataEmprestimo: Date;
  dataDevolucaoPrevista: Date;
  dataDevolucao?: Date;

  constructor(
    id: number,
    livro: Livro,
    usuario: Usuario,
    dataEmprestimo: Date,
    dataDevolucaoPrevista: Date,
    dataDevolucao?: Date
  ) {
    this.id = id;
    this.livro = livro;
    this.usuario = usuario;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    this.dataDevolucao = dataDevolucao;
  }
}

export default Emprestimo;
