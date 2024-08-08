"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = Order;
const Products_1 = __importDefault(require("../DB/Products"));
const Receipt_1 = __importDefault(require("../models/Receipt"));
const Users_1 = __importDefault(require("../DB/Users"));
function Order(index, quantity, UserId) {
    const p = Products_1.default.findIndex((val) => val.id == index);
    const u = Users_1.default.findIndex((val) => val.id == UserId);
    if (p != -1 && u != -1) {
        if (Products_1.default[p].quantity - quantity >= 0) {
            Products_1.default[p].quantity -= quantity;
            const reciptClass = new Receipt_1.default(Products_1.default[p], quantity, Users_1.default[u]);
            console.log("Done Placed Order");
            return reciptClass;
        }
        else {
            console.log("insuficient items");
        }
    }
    else {
        console.log("Invalid product ID");
    }
}
