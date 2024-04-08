// BookController.ts
import { Request, Response } from "express";
import Datacenter from "../db/Datacenter";
import Book from "../models/Book";

export default class BookController {
  private datacenter: Datacenter;

  constructor(datacenter: Datacenter) {
    this.datacenter = datacenter;
  }

  public createBook(req: Request, res: Response) {
    const { id, title, category } = req.body;
    const book = this.getNewBook(id, title, category);
    this.registerNewBook(book);
    res.status(201).send(book);
  }

  public removeBook(req: Request, res: Response) {
    const { id } = req.params;
    const removed = this.datacenter.removeBook(Number(id));
    if (removed) {
      res.status(200).send({ message: "Book removed successfully." });
    } else {
      res.status(404).send({ message: "Book not found." });
    }
  }

  public editBook(req: Request, res: Response) {
    const { id } = req.params;
    const bookData = req.body;
    const updatedBook = this.datacenter.editBook(Number(id), bookData);
    if (updatedBook) {
      res.status(200).send(updatedBook);
    } else {
      res.status(404).send({ message: "Book not found." });
    }
  }

  public getBooks(req: Request, res: Response) {
    const books = this.datacenter.books;
    res.status(200).send(books);
  }

  private getNewBook(id: number, title: string, category: string): Book {
    return new Book(id, title, category);
  }

  private registerNewBook(book: Book) {
    this.datacenter.addNewBook(book);
  }
}
