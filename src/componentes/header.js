import { admin } from "../vistas/admin";
import { home } from "../vistas/home";
import { router } from "./router";
export const header = {
    template: `<nav>
    <ul class="d-flex list-unstyled">
        <li id="home" class="pe-4">Home</li>
        <li id="about" class="pe-4">About</li>
        <li id="admin" class="pe-4">Admin</li>
        
    </ul>
</nav>`,
    script: ()=>{
        document.querySelector('#home').addEventListener("click", ()=>{
            router.home()
        })
        document.querySelector('#about').addEventListener("click", ()=>{
            router.about()
        })
        document.querySelector('#admin').addEventListener("click", ()=>{
            router.admin()
        })
        
    }

}