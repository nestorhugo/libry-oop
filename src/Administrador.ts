import Usuario from "./Usuario";

class Administrador extends Usuario {
  permissao: string;

  constructor(id: number, nome: string, email: string) {
    super(id, nome, email);
    this.permissao = "Administrador";
  }
}

export default Administrador;
