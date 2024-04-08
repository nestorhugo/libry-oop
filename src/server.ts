import express, { Request, Response } from "express";
import bookRoutes from "./routes/bookRoutes";

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Olá, mundo!");
});

app.listen(3000, () => {
  console.log("Libry is running in localhost:3000");
});
