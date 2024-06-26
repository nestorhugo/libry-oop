"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./bookRoutes"));
const studentRoutes_1 = __importDefault(require("./studentRoutes"));
const app = (0, express_1.default)();
app.use(bookRoutes_1.default);
app.use(studentRoutes_1.default);
exports.default = app;
