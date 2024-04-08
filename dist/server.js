"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/books", bookRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});
app.listen(3000, () => {
    console.log("Libry is running in localhost:3000");
});
