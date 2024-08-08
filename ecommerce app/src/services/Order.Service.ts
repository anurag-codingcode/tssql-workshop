import Product from "../interface/Product.Interface";
import User from "../interface/User.Interface";
import Products from "../DB/Products.DB";
import Receipt  from "./Receipt.Service";
import Users from "../DB/Users.DB";
import logger from "../Logger/logger";

export function Order(index: number, quantity: number, UserId: number) {

    const p = Products.findIndex((val) => val.id == index)
    const u = Users.findIndex((val) => val.id == UserId)
    if (p != -1 && u != -1) {
        if (Products[p].quantity - quantity >= 0) {
            Products[p].quantity -= quantity
            const reciptClass = Receipt(Products[p].id,Products[p].name,Products[p].cost, quantity, Users[u].name,Users[u].contact,Users[u].id)
            console.log("Done Placed Order")
            logger.info("Done Placed Order")
            return reciptClass
        }else{
            console.log("insuficient items")
            logger.info("insuficient items")
        }

    } else {
        console.log("Invalid product ID")
        logger.info("Invalid product ID")
    }
}