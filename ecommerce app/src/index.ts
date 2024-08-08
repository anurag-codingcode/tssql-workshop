import promptSync from 'prompt-sync';
const prompt = promptSync();
import { Order } from "./services/Order";
import Products from './DB/Products';
import Users from './DB/Users';
import User from './interface/User';
let userId:number

function displayProduct(){
    
    Products.map((val)=>console.log(`index: ${val.id} || product Name : ${val.name} || Product cost : ${val.cost} || Quantity available :${val.quantity}`))

}
function showCurrentUser(){
    console.log(Users[userId])
}

function setUser(){
    userId=parseInt(prompt("Enter User Id"))
}

function displayUser(){
    Users.map((val)=>console.log(`id: ${val.id} || name: ${val.name}`))

}

function PlaceOrder(){
    const id=parseInt(prompt("Enter product Id"))
    const quantity=parseInt(prompt("Enter product Quantity"))
    Order(id,quantity,userId)
}
function displayReceipt(){
    const index=Users.findIndex((val)=>val.id=userId)
    
    if(index!=-1){
        const user:User=Users[index]
        user.receipt?.map((val,ind)=>{
            console.log("Receipt no : ",ind+1)
            console.log("Product Name : ",val.productName)
            console.log("Product Cost : ",val.productCost)
            console.log("Product Quantity : ",val.quantityBuyed)
            console.log("Total Cost : ",val.totalCost)
            console.log("Date : ",val.date)

            console.log("\n \n")
        })
    }

}
let flag=true
while(flag){
    console.log("1. Display User")
    console.log("2. Set User")
    console.log("3. Display Product")
    console.log("4. Place order")
    console.log("5. Display Receipt")
    console.log("6. Exit")
    console.log("7. show User")
    const i=prompt("Enter your input")
    console.log("\n")
    switch(i){
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
            flag=false
        case '7':
            showCurrentUser()
        default:
            console.log("Enter valid input")


    }
    console.log("\n\n")

}

