import Receipt from "./Receipt"
export default interface User{
    id:number,
    name:string,
    contact:number,
    receipt:Receipt[]
}