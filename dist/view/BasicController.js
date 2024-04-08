"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const datacenter = new Datacenter_1.default();
class BasicController {
    startSystem() {
        console.log("Aplicação está rodando");
    }
}
exports.default = BasicController;
