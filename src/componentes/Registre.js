export const registre = {
    template: `
            <form class="row g-3 d-block">
            <div class="col-md-12 d-flex">
                <div class="col-10 d-block">
                    <label for="nick" class="form-label">Nick</label>
                    <input type="text" class="form-control" id="nick">
                </div>
            <div class="col-2 border " id="foto">
                
            </div>
            
            </div>
            <div class="col-md-10">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email">
            </div>
            <div class="col-md-10">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="pass">
            </div>
            <div class="col-12">
            <button type="submit" id="boton-enviar" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    `
}
