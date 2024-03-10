import Usuario from "./Usuario";
import Livro from "./Livro";

class Aluno extends Usuario {
  permissao: string;

  constructor(id: number, nome: string, email: string) {
    super(id, nome, email);
    this.permissao = "Aluno";
  }

  verificarEmprestimos(): Livro[] {
    return this.livrosEmprestados;
  }
}

export default Aluno;
