"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(bookController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.bookController = bookController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt("Escolha:\n1 - Cadastro Livro\n2 - Listar\n3 - Sair");
            switch (choice) {
                case "1":
                    //aqui pedimos uma instancia de book para o controller
                    let book = this.bookController.getNewBook(1, "Sample Title", "Sample Category");
                    this.registerBook(book);
                    break;
                case "2":
                    //console.clear();
                    this.bookController.listAllBooks();
                    break;
                case "3":
                    showScreen = true;
                    break;
                default:
                    //console.clear();
                    console.log("Tchau!!!!!");
            }
        }
    }
    registerBook(book) {
        let title = this.prompt("Digite o título do livro");
        let category = this.prompt("Digite a categoria do livro");
        book.setTitle(title);
        book.setCategory(category);
        //aqui requisito para o controller o registro do livro no BD
        this.bookController.registerNewBook(book);
        this.bookController.listAllBooks();
    }
}
exports.default = PrimaryScreen;
