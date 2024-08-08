"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = Order;
const Products_DB_1 = __importDefault(require("../DB/Products.DB"));
const Receipt_Service_1 = __importDefault(require("./Receipt.Service"));
const Users_DB_1 = __importDefault(require("../DB/Users.DB"));
const logger_1 = __importDefault(require("../Logger/logger"));
function Order(index, quantity, UserId) {
    const p = Products_DB_1.default.findIndex((val) => val.id == index);
    const u = Users_DB_1.default.findIndex((val) => val.id == UserId);
    if (p != -1 && u != -1) {
        if (Products_DB_1.default[p].quantity - quantity >= 0) {
            Products_DB_1.default[p].quantity -= quantity;
            const reciptClass = (0, Receipt_Service_1.default)(Products_DB_1.default[p].id, Products_DB_1.default[p].name, Products_DB_1.default[p].cost, quantity, Users_DB_1.default[u].name, Users_DB_1.default[u].contact, Users_DB_1.default[u].id);
            console.log("Done Placed Order");
            logger_1.default.info("Done Placed Order");
            return reciptClass;
        }
        else {
            console.log("insuficient items");
            logger_1.default.info("insuficient items");
        }
    }
    else {
        console.log("Invalid product ID");
        logger_1.default.info("Invalid product ID");
    }
}
