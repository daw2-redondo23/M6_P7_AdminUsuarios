import { adminUsuarios } from "./AdminUsuarios";

export const editarPerfil = {
    template: `<div class="modal" tabindex="-1" id="modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Editar Perfil</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class= "row">
                                    <div class="col-12" id="foto-perfil">
                                    </div>
                                </div>
                                <form class="row g-3 d-block">
                                    <div class="col-md-10 ">
                                        <label for="nick-editar" class="form-label">Nick</label>
                                        <input type="text" class="form-control" id="nick-editar">
                                    </div>
                                    <div class="col-md-10">
                                        <label for="email-editar" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email-editar">
                                    </div>
                                    <div class="col-md-10">
                                        <label for="pass-editar" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="pass-editar">
                                    </div>
                                    <input type="hidden" id="input-hidden"></input>
                                </form>
                            </div>
                            <div class="modal-footer justify-content-start">
                                <button type="button" class="btn btn-primary" id="btn-actualizar" data-bs-dismiss="modal">Actualizar perfil</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
  `,
  actualizarUsuario: ()=>{
        console.log("hola");
        let idArray = document.querySelector("#input-hidden").value

        for(let i = 0; i<adminUsuarios.array.length; i++){
            if(adminUsuarios.array[i].id == idArray){
                adminUsuarios.array[i].nick = document.querySelector('#nick-editar').value 
                adminUsuarios.array[i].email = document.querySelector('#email-editar').value 
                adminUsuarios.array[i].pass = document.querySelector('#pass-editar').value 
                
  
                let html = `
                            <td>${adminUsuarios.array[i].id}</td>
                            <td>${adminUsuarios.array[i].nick}</td>
                            <td>${adminUsuarios.array[i].email}</td>
                            <td><button type="button" class="btn btn-warning editar" id="editar" data-id = "${adminUsuarios.array[i].id}" data-bs-toggle="modal" data-bs-target="#modal">Editar</button><button type="button" class="btn btn-danger eliminar" data-id = "${adminUsuarios.array[i].id}">Eliminar</button></td>
                      `
                console.log(html);
                document.getElementById(i).innerHTML = html
            }
            
        }
        
  }
}