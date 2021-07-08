import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className="py-5 text-center container">
            <form className="mt-5 py-5 px-5">
                <h1>
                    Inscribirse a
                    <Link className="title ml-2" to="/">OfficeChat</Link>
                </h1>
                <p className="lead">Fill in the form below to create an account.</p>
                <div className="form-group">
                    <input className="form-control" placeholder="Email" name="email" type="email"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Password" name="password" type="password"></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary px-5" type="submit">registrarse</button>
                </div>
                <p>También puedes registrarte con este servicio</p>
                <button className="btn btn-danger mr-2" type="button">
                    Registrarse con Google
                </button>
                <hr></hr>
                <p>Ya tienes una cuenta? <Link to="/login">Ingresa</Link></p>

            </form>
        </div>
    )
}
