import promptSync from "prompt-sync";
import BookController from "../control/BookController";
import Book from "../model/Book";

export default class PrimaryScreen {
  private bookController: BookController;

  constructor(bookController: BookController) {
    this.bookController = bookController;
  }
  private prompt = promptSync();

  public getFirstScreen(): void {
    let showScreen: boolean = false;
    while (!showScreen) {
      // Get user input
      //console.clear();
      let choice = this.prompt(
        "Escolha:\n1 - Cadastro Livro\n2 - Listar\n3 - Sair"
      );

      switch (choice) {
        case "1":
          //aqui pedimos uma instancia de book para o controller
          let book: Book = this.bookController.getNewBook(
            1,
            "Sample Title",
            "Sample Category"
          );
          this.registerBook(book);
          break;

        case "2":
          console.clear();
          this.bookController.listAllBooks();
          break;
        case "3":
          showScreen = true;
          break;
        default:
          console.clear();
          console.log("Tchau!!!!!");
      }
    }
  }

  public registerBook(book: Book): void {
    let title = this.prompt("Digite o título do livro");
    let category = this.prompt("Digite a categoria do livro");
    book.setTitle(title);
    book.setCategory(category);
    //aqui requisito para o controller o registro do livro no BD
    this.bookController.registerNewBook(book);
    this.bookController.listAllBooks();
  }
}
