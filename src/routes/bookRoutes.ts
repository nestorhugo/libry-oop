import express from "express";
import BookController from "../controllers/BookController";
import Datacenter from "../db/Datacenter";

const router = express.Router();
const bookController = new BookController(new Datacenter());

router.post("/", (req, res) => bookController.createBook(req, res));
router.get("/", (req, res) => bookController.getBooks(req, res));

export default router;
