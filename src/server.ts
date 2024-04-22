import express, { Request, Response } from "express";
import bookRoutes from "./routes/bookRoutes";
import LibraryController from "./controllers/LibraryController";
import BookController from "./controllers/BookController";
import Datacenter from "./db/Datacenter";

const app = express();
app.use(express.json());

const datacenter = new Datacenter();
const libraryController = new LibraryController(datacenter);
const bookController = new BookController(datacenter);

app.use("/books", bookRoutes(bookController));

app.get("/", (req: Request, res: Response) => {
  res.send("Olá, mundo!");
});

app.listen(3000, () => {
  console.log("Libry is running in localhost:3000");

  // Crie a biblioteca padrão após a inicialização do servidor
  const defaultLibrary = libraryController.createNewLibrary(1);
  libraryController.registerNewLibrary(defaultLibrary);
});
