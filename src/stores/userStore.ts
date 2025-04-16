import { defineStore } from "pinia";
import api from "../services/api";

export interface User{
    email:  string;
    token: string;
    fullName: string;
}

export const useUserStore = defineStore("userStore", {
    state:() =>({
        user: null as User | null,
        error: null as string | null,
    }),

    actions:{
        async login(email: string, password: string){
            try{
                const response = await api.post("/auth/login", {
                    email,
                    password
                });

                const token = response.data; //we will get back to this

                this.user = {email, token};
                this.error = null;
            }
            catch(err: any){
                this.error = err || 'Login failed'
            }
        },

        logOut(){
            this.user = null;
        },
    },
persist: true,

})