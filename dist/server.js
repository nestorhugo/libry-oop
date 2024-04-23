"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const LibraryController_1 = __importDefault(require("./controllers/LibraryController"));
const BookController_1 = __importDefault(require("./controllers/BookController"));
const StudentController_1 = __importDefault(require("./controllers/StudentController"));
const Datacenter_1 = __importDefault(require("./db/Datacenter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const datacenter = new Datacenter_1.default();
const libraryController = new LibraryController_1.default(datacenter);
const bookController = new BookController_1.default(datacenter);
const studentController = new StudentController_1.default(datacenter);
app.use("/books", (0, bookRoutes_1.default)(bookController));
app.use("/students", (0, studentRoutes_1.default)(studentController));
app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});
app.listen(3000, () => {
    console.log("Libry is running in localhost:3000");
    // Crie a biblioteca padrão após a inicialização do servidor
    const defaultLibrary = libraryController.createNewLibrary(1);
    libraryController.registerNewLibrary(defaultLibrary);
});
