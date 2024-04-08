"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookController_1 = __importDefault(require("../controllers/BookController"));
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const router = express_1.default.Router();
const bookController = new BookController_1.default(new Datacenter_1.default());
router.post("/", (req, res) => bookController.createBook(req, res));
router.get("/", (req, res) => bookController.getBooks(req, res));
router.delete("/:id", (req, res) => bookController.removeBook(req, res));
exports.default = router;
