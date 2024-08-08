"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../DB/Users"));
class Receipt {
    constructor(productDetail, quantityBuyed, UserDetails) {
        var _a;
        this.productId = productDetail.id;
        this.productName = productDetail.name;
        this.productCost = productDetail.cost;
        this.quantityBuyed = quantityBuyed;
        this.userName = UserDetails.name;
        this.userContact = UserDetails.contact;
        this.userId = UserDetails.id;
        const index = Users_1.default.findIndex((val) => val.id == this.userId);
        (_a = Users_1.default[index].receipt) === null || _a === void 0 ? void 0 : _a.push({
            productId: this.productId,
            productName: this.productName,
            productCost: this.productCost,
            quantityBuyed: this.quantityBuyed,
            totalCost: this.productCost * this.quantityBuyed,
            date: new Date()
        });
    }
}
exports.default = Receipt;
