import Product from "../interface/Product.Interface";
import User from "../interface/User.Interface";
import Products from "../DB/Products.DB";
import Users from "../DB/Users.DB";
import logger from "../Logger/logger";

export default function Receipt(productId: number, productName: string, productCost: number, quantityBuyed: number, userName: string, userContact: number, userId: number
) {
    const index = Users.findIndex((val) => val.id == userId)
    
        Users[index].receipt?.push({
            productId: productId,
            productName: productName,
            productCost: productCost,
            quantityBuyed: quantityBuyed,
            totalCost:productCost*quantityBuyed,
            date:new Date()
        });
        console.log("Made Receipt Successfully")
        logger.info("Made Receipt Successfully")

}