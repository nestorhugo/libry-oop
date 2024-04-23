"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentRoutes = (studentController) => {
    const router = express_1.default.Router();
    router.get("/", (req, res) => studentController.getStudents(req, res));
    router.post("/", (req, res) => studentController.createStudent(req, res));
    return router;
};
exports.default = studentRoutes;
