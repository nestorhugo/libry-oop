import Livro from "./Livro";

class Usuario {
  id: number;
  nome: string;
  email: string;
  livrosEmprestados: Livro[];
  livrosReservados: Livro[];

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.livrosEmprestados = [];
    this.livrosReservados = [];
  }

  pegarEmprestado(livro: Livro) {
    livro.emprestar(this);
    this.livrosEmprestados.push(livro);
  }

  devolverLivro(livro: Livro) {
    const index = this.livrosEmprestados.indexOf(livro);
    if (index === -1) {
      throw new Error("Este livro não foi emprestado por este usuário");
    }
    livro.devolver();
    this.livrosEmprestados.splice(index, 1);
  }

  reservarLivro(livro: Livro) {
    livro.reservar(this);
    this.livrosReservados.push(livro);
  }
}

export default Usuario;
