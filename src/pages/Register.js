import React from 'react'

export default function Register() {
    return (
        <div className="py-5 container">
            <h1>Register</h1>
            <form>
                <div class="mb-3">
                    <label class="form-label">URL logo</label>
                    <input type="text" class="form-control" placeholder="https://ejemplo.jpg" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Nombre Empresa</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Descripcion</label>
                    <textarea className="form-control" placeholder="Ingresa una descripcion" name="content" />
                </div>
                <div class="mb-3">
                    <label class="form-label">URL del sitio web de la empresa</label>
                    <input type="text" class="form-control" placeholder="https://ejemplo.com" />
                </div>

                <button type="submit" class="btn btn-primary">Guardar </button>
            </form>
        </div>
    )
}
