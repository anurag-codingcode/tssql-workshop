import Product from "../interface/Product";
import User from "../interface/User";
import Products from "../DB/Products";
import Receipt from "../models/Receipt";
import Users from "../DB/Users";

export function Order(index: number, quantity: number, UserId: number) {

    const p = Products.findIndex((val) => val.id == index)
    const u = Users.findIndex((val) => val.id == UserId)
    if (p != -1 && u != -1) {
        if (Products[p].quantity - quantity >= 0) {
            Products[p].quantity -= quantity
            const reciptClass = new Receipt(Products[p], quantity, Users[u])
            console.log("Done Placed Order")
            return reciptClass
        }else{
            console.log("insuficient items")
        }

    } else {
        console.log("Invalid product ID")
    }
}