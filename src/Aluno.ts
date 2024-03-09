import Usuario from "./Usuario";

class Aluno extends Usuario {
  permissao: string;

  constructor(id: number, nome: string, email: string) {
    super(id, nome, email);
    this.permissao = "Aluno";
  }
}

export default Aluno;
