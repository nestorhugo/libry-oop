"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = this.hashPassword(password);
    }
    hashPassword(password) {
        const saltRounds = 10;
        const salt = bcrypt_1.default.genSaltSync(saltRounds);
        return bcrypt_1.default.hashSync(password, salt);
    }
    checkPassword(password) {
        return bcrypt_1.default.compareSync(password, this.passwordHash);
    }
    listBooksByCategory(library, category) {
        return library.listBooks().filter((book) => book.category === category);
    }
    toJSON() {
        const _a = this, { passwordHash } = _a, rest = __rest(_a, ["passwordHash"]);
        return rest;
    }
}
exports.default = User;
