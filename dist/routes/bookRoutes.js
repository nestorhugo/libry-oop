"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes = (bookController) => {
    const router = express_1.default.Router();
    router.get("/", (req, res) => bookController.getBooks(req, res));
    router.post("/", (req, res) => bookController.createBook(req, res));
    router.put("/:id", (req, res) => bookController.editBook(req, res));
    router.delete("/:id", (req, res) => bookController.removeBook(req, res));
    return router;
};
exports.default = bookRoutes;
