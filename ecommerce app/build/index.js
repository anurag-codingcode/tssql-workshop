"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Order_Service_1 = require("./services/Order.Service");
const Products_DB_1 = __importDefault(require("./DB/Products.DB"));
const Users_DB_1 = __importDefault(require("./DB/Users.DB"));
let userId = 0;
function displayProduct() {
    Products_DB_1.default.map((val) => console.log(`index: ${val.id} || product Name : ${val.name} || Product cost : ${val.cost} || Quantity available :${val.quantity}`));
}
function showCurrentUser() {
    const user = Users_DB_1.default.find((user) => user.id == userId);
    console.log(user);
}
function setUser() {
    userId = parseInt(prompt("Enter User Id"));
}
function displayUser() {
    Users_DB_1.default.map((val) => console.log(`id: ${val.id} || name: ${val.name}`));
}
function PlaceOrder() {
    const id = parseInt(prompt("Enter product Id "));
    const quantity = parseInt(prompt("Enter product Quantity"));
    (0, Order_Service_1.Order)(id, quantity, userId);
}
function displayReceipt() {
    var _a;
    const index = Users_DB_1.default.findIndex((val) => val.id == userId);
    if (index != -1) {
        const user = Users_DB_1.default[index];
        let total = 0;
        (_a = user.receipt) === null || _a === void 0 ? void 0 : _a.map((val, ind) => {
            console.log("Receipt no : ", ind + 1);
            console.log("Product Name : ", val.productName);
            console.log("Product Cost : ", val.productCost);
            console.log("Product Quantity : ", val.quantityBuyed);
            console.log("Total Cost : ", val.totalCost);
            console.log("Date : ", val.date);
            total += val.totalCost;
            console.log("\n");
        });
        console.log(`Total Bill for ${user.name} : ${total}`);
        console.log("\n\n");
    }
}
let flag = true;
while (flag) {
    console.log("1. Display User");
    console.log("2. Set User");
    console.log("3. Display Product");
    console.log("4. Place order");
    console.log("5. Display Receipt");
    console.log("6. Show User");
    console.log("7. Exit");
    const i = prompt("Enter your input");
    console.log("\n");
    switch (i) {
        case '1':
            displayUser();
            break;
        case '2':
            setUser();
            break;
        case '3':
            displayProduct();
            break;
        case '4':
            PlaceOrder();
            break;
        case '5':
            displayReceipt();
            break;
        case '6':
            showCurrentUser();
            break;
        case '7':
            flag = false;
            break;
        default:
            console.log("Enter valid input");
    }
    console.log("\n\n");
}
