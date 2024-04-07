"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const BookController_1 = __importDefault(require("../control/BookController"));
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const datacenter = new Datacenter_1.default();
class BasicController {
    constructor() {
        this.primaryScreen = new PrimaryScreen_1.default(new BookController_1.default(datacenter));
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = BasicController;
