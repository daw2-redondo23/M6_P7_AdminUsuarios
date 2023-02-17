export const login = {
    template: `<form id="form3" class="row g-3 d-block needs-validation" novalidate >
                    <div class="col-md-10">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required>
                        <!-- mensaje si valida -->
                        <div class="valid-feedback">Email correcto</div>
                        <!-- mensaje si no valida -->
                        <div class="invalid-feedback">Incorrecto, introduce un email que sea correcto</div>
                    </div>

                    <div class="col-md-10">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="pass" required maxlength="16" minlength="6" pattern="[A-Z]{1,}[^A-Z]{1,}[0-9]{1,}">
                        <!-- mensaje si valida -->
                        <div class="valid-feedback">Password correcta</div>
                        <!-- mensaje si no valida -->
                        <div class="invalid-feedback">Incorrecta, el orden es letras mayusculas, letras minusculas y numeros </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" id="boton-login" class="btn btn-primary">Enviar</button>
                    </div>
                </form>`,
    script: ()=>{
        document.getElementById('boton-login').addEventListener('click', (e)=>{
            e.preventDefault();
            document.querySelector('#form3').classList.add('was-validated');
            if(form3.checkValidity()){
                form3.classList.remove('was-validated')
            }
        })
    }
}