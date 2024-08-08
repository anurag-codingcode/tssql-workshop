"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Receipt;
const Users_DB_1 = __importDefault(require("../DB/Users.DB"));
const logger_1 = __importDefault(require("../Logger/logger"));
function Receipt(productId, productName, productCost, quantityBuyed, userName, userContact, userId) {
    var _a;
    const index = Users_DB_1.default.findIndex((val) => val.id == userId);
    (_a = Users_DB_1.default[index].receipt) === null || _a === void 0 ? void 0 : _a.push({
        productId: productId,
        productName: productName,
        productCost: productCost,
        quantityBuyed: quantityBuyed,
        totalCost: productCost * quantityBuyed,
        date: new Date()
    });
    console.log("Made Receipt Successfully");
    logger_1.default.info("Made Receipt Successfully");
}
