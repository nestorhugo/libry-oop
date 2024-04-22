import express from "express";
import BookController from "../controllers/BookController";

const bookRoutes = (bookController: BookController) => {
  const router = express.Router();

  router.get("/", (req, res) => bookController.getBooks(req, res));
  router.post("/", (req, res) => bookController.createBook(req, res));
  router.put("/:id", (req, res) => bookController.editBook(req, res));
  router.delete("/:id", (req, res) => bookController.removeBook(req, res));

  return router;
};

export default bookRoutes;
