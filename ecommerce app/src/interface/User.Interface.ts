import Receipt from "./Receipt.Interface"
export default interface User{
    id:number,
    name:string,
    contact:number,
    receipt:Receipt[]
}