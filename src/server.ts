import express from "express";
import usuarioRouter from "./controllers/UsuarioController";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/usuarios", usuarioRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
