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

  public getBooks(req: Request, res: Response) {
    const books = this.datacenter.book;
    res.status(200).send(books);
  }

  private getNewBook(id: number, title: string, category: string): Book {
    return new Book(id, title, category);
  }

  private registerNewBook(book: Book) {
    this.datacenter.addNewBook(book);
  }
}
