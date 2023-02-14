import { adminUsuarios } from "../componentes/AdminUsuarios.js";
import { registre } from "../componentes/Registre";
import { v4 as uuidv4 } from 'uuid';
import multiavatar from '@multiavatar/multiavatar/esm'
import { editarPerfil } from "../componentes/EditarPerfil.js";

export const admin = {
    template: `<div class="row justify-content-between">
                <div class="col-3 border" id="div-formulario">
                </div>
                <div class="col-8 border" id="div-tabla">

                </div>
            </div>`,
    script: ()=>{
        document.querySelector('#modalDiv').innerHTML = editarPerfil.template
        document.querySelector('#div-tabla').innerHTML = adminUsuarios.pintaTabla()
        document.querySelector('#div-formulario').innerHTML = registre.template
        const tbody = document.createElement('tbody')
        let fila =''
        for(let i = 0; i< adminUsuarios.array.length; i++){
            
            fila += `<tr id="${i}">
                        <td>${adminUsuarios.array[i].id}</td>
                        <td>${adminUsuarios.array[i].nick}</td>
                        <td>${adminUsuarios.array[i].email}</td>
                        <td><button type="button" class="btn btn-warning editar" id="editar" data-id = "${adminUsuarios.array[i].id}" data-bs-toggle="modal" data-bs-target="#modal">Editar</button><button type="button" class="btn btn-danger eliminar" data-id = "${adminUsuarios.array[i].id}">Eliminar</button></td>
                    </tr>`
        }
        tbody.innerHTML = fila
        console.log(fila);
        console.log(tbody);
        document.querySelector('table').append(tbody)
       
        
        document.getElementById('boton-enviar').addEventListener('click', ()=>{
            event.preventDefault();
            let nick = document.getElementById('nick').value;
            let email = document.getElementById('email').value;
            let Password = document.getElementById('pass').value;
           
            let objeto = {
                id: uuidv4(),
                nick: nick,
                email: email,
                pass: Password
            }
            adminUsuarios.array.push(objeto)
            console.dir(objeto.id);
            let fila= `<tr>
                            <td>${objeto.id}</td>
                            <td id="nick-tabla">${nick}</td>
                            <td>${email}</td>
                            <td><button type="button" class="btn btn-warning editar" data-id = "${objeto.id}"  data-bs-toggle="modal" data-bs-target="#modal">Editar</button><button type="button" class="btn btn-danger eliminar" data-id = "${objeto.id}">Eliminar</button></td>
                        </tr>`
            const tr = document.createElement('tr')
            tr.setAttribute("id", objeto.id)
            tr.innerHTML = fila
            
            document.querySelector('tbody').append(tr)
            console.log(tr);
            admin.controlTeclas()
        })

        document.querySelector('#nick').addEventListener('keyup',(event)=>{
            let svgCode = multiavatar(event.target.value)
            document.querySelector('#foto').innerHTML = svgCode
        })
        
        
    },
    controlTeclas: ()=>{
        const btnEditar = document.querySelectorAll(".editar");

        for (let i = 0; i < btnEditar.length; i++) {
            btnEditar[i].addEventListener("click", (event)=>{
                console.log("estoy dentro");
                let id = event.target.getAttribute("data-id")
                console.log(id);
                const found = adminUsuarios.array.find(element => element.id == id);
                
                document.querySelector('#nick-editar').value = found.nick
                document.querySelector('#email-editar').value = found.email
                document.querySelector('#pass-editar').value = found.pass
                document.querySelector('#input-hidden').value = found.id
                
                
                let svgCode = multiavatar(found.nick)
                document.querySelector('#foto-perfil').innerHTML = svgCode
                
                document.querySelector('#nick-editar').addEventListener('keyup',(event)=>{
                    let svgCode = multiavatar(event.target.value)
                    document.querySelector('#foto-perfil').innerHTML = svgCode
                })
                document.querySelector('#btn-actualizar').addEventListener("click", editarPerfil.actualizarUsuario)
 
            })
        }
        const btnEliminar = document.querySelectorAll(".eliminar");

        for (let i = 0; i < btnEliminar.length; i++) {
            btnEliminar[i].addEventListener("click", (event)=>{
                let id = event.target.getAttribute("data-id")
                Swal.fire({
                    title: 'Estas eliminando la fila con id ' + event.target.getAttribute("data-id"),
                    text: "No podras recuperarla",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, elimínala!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Eliminada!',
                        'Esta fila ha sido eliminada.',
                        'success'
                      )
                      document.getElementById(id).classList += 'fila-oculta'
                    }
                  })
                console.log("eliminar");
            })
        } 
    }
}