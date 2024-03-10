import Usuario from "./Usuario";
import Livro from "./Livro";

class Administrador extends Usuario {
  permissao: string;
  biblioteca: Livro[];

  constructor(id: number, nome: string, email: string) {
    super(id, nome, email);
    this.permissao = "Administrador";
    this.biblioteca = [];
  }

  adicionarLivro(livro: Livro) {
    this.biblioteca.push(livro);
  }

  removerLivro(livro: Livro) {
    const index = this.biblioteca.indexOf(livro);
    if (index === -1) {
      throw new Error("Este livro não está na biblioteca");
    }
    this.biblioteca.splice(index, 1);
  }
}

export default Administrador;
