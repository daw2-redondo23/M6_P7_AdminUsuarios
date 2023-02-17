import { admin } from "../vistas/admin";
import { home } from "../vistas/home";
import { about } from "../vistas/about";
import { registre } from "./Registre";
import { login } from "../vistas/login";
export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
        home.script()
    },

    admin: ()=>{
        document.querySelector('main').innerHTML = admin.template;    
        admin.script()
        admin.controlTeclas()
    },
    about: ()=>{
        document.querySelector('main').innerHTML = about.template;
        about.script()
    },
    login: ()=>{
        document.querySelector('main').innerHTML = login.template;
        login.script();
    }
}