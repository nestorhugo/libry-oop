"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Usuario_1 = __importDefault(require("../Usuario"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Read all users
router.get("/", (req, res) => {
    const usuarios = JSON.parse(fs_1.default.readFileSync("usuarios.json", "utf-8"));
    res.json(usuarios);
});
// Read one user
router.get("/:id", (req, res) => {
    const usuarios = JSON.parse(fs_1.default.readFileSync("usuarios.json", "utf-8"));
    if (!usuarios) {
        res.status(404).send("Nenhum usuário encontrado");
        return;
    }
    const usuario = usuarios.find((u) => u.id == Number(req.params.id));
    if (!usuario) {
        res.status(404).send("Usuário não encontrado");
        return;
    }
    res.json(usuario);
});
// Create a user
router.post("/", (req, res) => {
    try {
        const usuarios = JSON.parse(fs_1.default.readFileSync("usuarios.json", "utf-8"));
        const novoUsuario = new Usuario_1.default(req.body.id, req.body.nome, req.body.email);
        console.log(novoUsuario);
        // usuarios.push(novoUsuario);
        // fs.writeFileSync("usuarios.json", JSON.stringify(usuarios));
        // res.json(novoUsuario);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
    }
});
// Update a user
router.put("/:id", (req, res) => {
    const usuarios = JSON.parse(fs_1.default.readFileSync("usuarios.json", "utf-8"));
    const index = usuarios.findIndex((u) => u.id === Number(req.params.id));
    if (index !== -1) {
        usuarios[index] = req.body;
        fs_1.default.writeFileSync("usuarios.json", JSON.stringify(usuarios));
        res.json(usuarios[index]);
    }
    else {
        res.status(404).send("Usuário não encontrado");
    }
});
// Delete a user
router.delete("/:id", (req, res) => {
    const usuarios = JSON.parse(fs_1.default.readFileSync("usuarios.json", "utf-8"));
    const index = usuarios.findIndex((u) => u.id === Number(req.params.id));
    if (index !== -1) {
        const usuarioDeletado = usuarios.splice(index, 1);
        fs_1.default.writeFileSync("usuarios.json", JSON.stringify(usuarios));
        res.json(usuarioDeletado);
    }
    else {
        res.status(404).send("Usuário não encontrado");
    }
});
exports.default = router;
