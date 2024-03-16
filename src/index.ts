import Livro from "./Livro";
import Usuario from "./Usuario";
import Aluno from "./Aluno";
import Administrador from "./Administrador";
import Emprestimo from "./Emprestimo";
import Reserva from "./Reserva";

let meuLivro = new Livro(
  1,
  "1984",
  "George Orwell",
  1949,
  "978-0451524935",
  10
);

const novoUsuario = new Usuario(1, "gorge", "gorge@gmail.com");

console.log(novoUsuario);
