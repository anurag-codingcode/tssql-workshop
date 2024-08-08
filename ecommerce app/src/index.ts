import promptSync from 'prompt-sync';
const prompt = promptSync();
import { Order } from "./services/Order.Service";
import Products from './DB/Products.DB';
import Users from './DB/Users.DB';
import User from './interface/User.Interface';
let userId = 0

function displayProduct() {

    Products.map((val) => console.log(`index: ${val.id} || product Name : ${val.name} || Product cost : ${val.cost} || Quantity available :${val.quantity}`))

}
function showCurrentUser() {
    const user = Users.find((user) => user.id == userId)
    console.log(user)
}

function setUser() {
    userId = parseInt(prompt("Enter User Id"))
}

function displayUser() {
    Users.map((val) => console.log(`id: ${val.id} || name: ${val.name}`))

}

function PlaceOrder() {
    const id = parseInt(prompt("Enter product Id "))
    const quantity = parseInt(prompt("Enter product Quantity"))
    Order(id, quantity, userId)
}
function displayReceipt() {
    const index = Users.findIndex((val) => val.id == userId)

    if (index != -1) {
        const user: User = Users[index]
        let total = 0
        user.receipt?.map((val, ind) => {
            console.log("Receipt no : ", ind + 1)
            console.log("Product Name : ", val.productName)
            console.log("Product Cost : ", val.productCost)
            console.log("Product Quantity : ", val.quantityBuyed)
            console.log("Total Cost : ", val.totalCost)
            console.log("Date : ", val.date)
            total += val.totalCost
            console.log("\n")
        })
        console.log(`Total Bill for ${user.name} : ${total}`)
        console.log("\n\n")
    }

}
let flag = true
while (flag) {
    console.log("1. Display User")
    console.log("2. Set User")
    console.log("3. Display Product")
    console.log("4. Place order")
    console.log("5. Display Receipt")
    console.log("6. Show User")
    console.log("7. Exit")
    const i = prompt("Enter your input")
    console.log("\n")
    switch (i) {
        case '1':
            displayUser()
            break
        case '2':
            setUser()
            break
        case '3':
            displayProduct()
            break
        case '4':
            PlaceOrder()
            break
        case '5':
            displayReceipt()
            break
        case '6':
            showCurrentUser()
            break
        case '7':
            flag = false
            break
        default:
            console.log("Enter valid input")
    }
    console.log("\n\n")

}

