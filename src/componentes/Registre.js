export const registre = {
    template: `
            <form id="form" class="row g-3 d-block needs-validation" novalidate >
            <div class="col-md-12 d-flex">
                <div class="col-10 d-block">
                    <label for="nick" class="form-label">Nick</label>
                    <input type="text" class="form-control" id="nick" required pattern="[A-Z]{1,10}\_">
                    <!-- mensaje si valida -->
                    <div class="valid-feedback">Nick correcto</div>
                    <!-- mensaje si no valida -->
                    <div class="invalid-feedback">Incorrecto, solo letras mayúsculas(entre 1 y 10) y el símbolo "_" </div>
                </div>
                <div class="col-2 border " id="foto"></div>
            </div>

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
            <button type="submit" id="boton-enviar" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    `
}
