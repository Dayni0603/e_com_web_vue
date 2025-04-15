import { defineStore } from "pinia";
import { fetchProducts } from "../services/productService";

export interface Products {
    id: string;
    name:string;
    discribtion:string;
    price:number;
}

export const useProductStore = defineStore("ProductStore", {
    state:() =>({
        products:[] as Products[],
        loading: false,
        error: null as string | null
    }),

    actions:{
        async loadProducts(){
            this.loading = true;
            try{
                this.products = await fetchProducts();
                this.error = null
            }
            catch(err: any){
                this.error = err;
            }
            finally{
                this.loading = false;
            }
        }
    }
})