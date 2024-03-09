class Livro {
  id: number;
  titulo: string;
  autor: string;
  anoPublicado: number;
  isnb: string;
  quantidadeDisponivel: number;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    anoPublicado: number,
    isnb: string,
    quantidadeDisponivel: number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicado = anoPublicado;
    this.isnb = isnb;
    this.quantidadeDisponivel = quantidadeDisponivel;
  }
}
export default Livro;
