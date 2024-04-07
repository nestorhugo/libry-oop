// import Book from "./Book";
// import Library from "./Library";
// import Librarian from "./Librarian";
// import Student from "./Student";

// const library = new Library();

// const librarian = new Librarian(1, "Nestor");

// librarian.addBook(library, new Book(1, "O menino cabeçudo", "Infantil"));
// librarian.addBook(library, new Book(2, "O menino sem pai", "Drama"));
// librarian.addBook(library, new Book(3, "O menino inteligente", "Didático"));

// console.log(library.listBooks());

// const student = new Student(1, "Hugo");

// console.log(student.listBooksByCategory(library, "Infantil"));

// const book = library.listBooks()[0];
// student.reserveBook(book);

// librarian.confirmReservation(book);

// console.log(library.listBooks());

// import Datacenter from "../db/Datacenter";
// import BookController from "../control/BookController";

// const datacenter = new Datacenter();

// const bookController = new BookController(datacenter);

// const newBook = bookController.getNewBook(1, "O Senhor dos Anéis", "Fantasia");
// bookController.registerNewBook(newBook);

// bookController.listAllBooks();

import BasicController from "../view/BasicController";
import PrimaryScreen from "../view/PrimaryScreen";

let startController: BasicController = new BasicController();
startController.startSystem();
