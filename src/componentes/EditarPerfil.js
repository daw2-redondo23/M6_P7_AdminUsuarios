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
                                <form id="form2" class="row g-3 d-block needs-validation" novalidate>
                                    <div class="col-md-10 ">
                                        <label for="nick-editar" class="form-label">Nick</label>
                                        <input type="text" class="form-control" id="nick-editar" required pattern="[A-Z]{1,10}\_">
                                        <!-- mensaje si valida -->
                                        <div class="valid-feedback">Nick correcto</div>
                                        <!-- mensaje si no valida -->
                                        <div class="invalid-feedback">Incorrecto, solo letras mayúsculas(entre 1 y 10) y el símbolo "_" </div>
                                    </div>

                                    <div class="col-md-10">
                                        <label for="email-editar" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email-editar" required>
                                        <!-- mensaje si valida -->
                                        <div class="valid-feedback">Email correcto</div>
                                        <!-- mensaje si no valida -->
                                        <div class="invalid-feedback">Incorrecto, introduce un email que sea correcto</div>
                                        </div>
                                    <div class="col-md-10">
                                        <label for="pass-editar" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="pass-editar" required maxlength="16" minlength="6" pattern="[A-Z]{1,}[^A-Z]{1,}[0-9]{1,}">
                                        <!-- mensaje si valida -->
                                        <div class="valid-feedback">Password correcta</div>
                                        <!-- mensaje si no valida -->
                                        <div class="invalid-feedback">Incorrecta, el orden es letras mayusculas, letras minusculas y numeros </div>
                                    </div>
                                    <input type="hidden" id="input-hidden"></input>
                                </form>
                            </div>
                            <div class="modal-footer justify-content-start">
                                <button type="button" class="btn btn-primary" id="btn-actualizar" >Actualizar perfil</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
  `,
  actualizarUsuario: ()=>{
        event.preventDefault()
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