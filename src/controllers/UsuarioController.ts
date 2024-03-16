import express from "express";
import Usuario from "../Usuario";
import bodyParser from "body-parser";
import fs from "fs";

const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Read all users
router.get("/", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
  res.json(usuarios);
});

// Read one user
router.get("/:id", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
  if (!usuarios) {
    res.status(404).send("Nenhum usuário encontrado");
    return;
  }
  const usuario = usuarios.find((u: Usuario) => u.id == Number(req.params.id));
  if (!usuario) {
    res.status(404).send("Usuário não encontrado");
    return;
  }
  res.json(usuario);
});

// Create a user
router.post("/", (req, res) => {
  try {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
    const maxId =
      usuarios.length > 0
        ? Math.max(...usuarios.map((u: { id: any }) => u.id))
        : 0;
    const novoUsuario = new Usuario(maxId + 1, req.body.nome, req.body.email);
    usuarios.push(novoUsuario);
    fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
    res.json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno do servidor");
  }
});

// Update a user
router.put("/:id", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
  const index = usuarios.findIndex(
    (u: Usuario) => u.id === Number(req.params.id)
  );
  if (index !== -1) {
    if (req.body.id) {
      delete req.body.id;
    }

    Object.assign(usuarios[index], req.body);
    fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
    res.json(usuarios[index]);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
});

// Delete a user
router.delete("/:id", (req, res) => {
  const usuarios = JSON.parse(fs.readFileSync("usuarios.json", "utf-8"));
  const index = usuarios.findIndex(
    (u: Usuario) => u.id === Number(req.params.id)
  );
  if (index !== -1) {
    const usuarioDeletado = usuarios.splice(index, 1);
    fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
    res.json(usuarioDeletado);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
});

export default router;
