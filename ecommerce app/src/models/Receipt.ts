import Product from "../interface/Product";
import User from "../interface/User";
import Users from "../DB/Users";

export default class Receipt {
    public productId: number
    public productName: string
    public productCost: number
    public quantityBuyed: number
    public userName: string
    public userContact: number
    public userId: number

    constructor(productDetail: Product, quantityBuyed: number, UserDetails: User) {
      
        this.productId = productDetail.id
        this.productName = productDetail.name
        this.productCost = productDetail.cost
        this.quantityBuyed = quantityBuyed
        this.userName = UserDetails.name
        this.userContact = UserDetails.contact
        this.userId = UserDetails.id

        const index = Users.findIndex((val) => val.id == this.userId)
    
        Users[index].receipt?.push({
            productId: this.productId,
            productName: this.productName,
            productCost: this.productCost,
            quantityBuyed: this.quantityBuyed,
            totalCost:this.productCost*this.quantityBuyed,
            date:new Date()
        })

    }
}