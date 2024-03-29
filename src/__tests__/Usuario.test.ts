import Usuario from "../Usuario";
import Livro from "../Livro";

describe("Usuario", () => {
  let usuario: Usuario;
  let livro: Livro;

  beforeEach(() => {
    usuario = new Usuario(1, "Teste", "teste@teste.com");
    livro = new Livro(
      1, // id
      "O Senhor dos Anéis", // titulo
      "J.R.R. Tolkien", // autor
      1954, // anoPublicado
      "978-8533613379", // isnb
      5 // quantidadeDisponivel
    );
  });

  it("should be able to borrow a book!", () => {
    usuario.pegarEmprestado(livro);
    expect(usuario.livrosEmprestados).toContain(livro);
  });

  it("should be able to return a book", () => {
    usuario.pegarEmprestado(livro);
    usuario.devolverLivro(livro);
    expect(usuario.livrosEmprestados).not.toContain(livro);
  });

  it("should throw an error when trying to return a book that was not borrowed", () => {
    expect(() => usuario.devolverLivro(livro)).toThrowError(
      "Este livro não foi emprestado por este usuário"
    );
  });

  it("should be able to reserve a book", () => {
    usuario.reservarLivro(livro);
    expect(usuario.livrosReservados).toContain(livro);
  });
});
