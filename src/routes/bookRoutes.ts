import express from "express";
import BookController from "../controllers/BookController";
import Datacenter from "../db/Datacenter";

const router = express.Router();
const bookController = new BookController(new Datacenter());

router.get("/", (req, res) => bookController.getBooks(req, res));
router.post("/", (req, res) => bookController.createBook(req, res));
router.put("/:id", (req, res) => bookController.editBook(req, res));
router.delete("/:id", (req, res) => bookController.removeBook(req, res));

export default router;
