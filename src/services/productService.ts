import { Products } from "../stores/productStore";
import api from "./api";

export const fetchProducts = async (): Promise<Products[]> =>{
    try{
        const response = await api.get("/product");
        return response.data;
    }
    catch(err: any){
        throw new Error(err || "Failed to fetch products");
    }
}