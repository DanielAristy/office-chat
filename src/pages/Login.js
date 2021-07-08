import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="container">
            <form
                className="mt-5 py-5 px-5"/*Centrar el formulario*/
                autoComplete="off"
            >
                <h1>
                    Login to
                    <Link className="title ml-2" to="/">{/*Separacion al lado izquierdo*/}
                        Offfice Chat
                    </Link>
                </h1>
                <p className="lead">{/* Creando un estilo mas tenue en la letra */}
                    Fill in the form below to login to your account.
                </p>
                <div className="form-group">{/*Separacion*/}
                    <input
                        /**form-control darle un tamañao hasta donde si limite el container */
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="form-group">{/*Separacion*/}
                    <input
                        /**form-control darle un tamañao hasta donde si limite el container */
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                </div>
                <div className="form-group">{/*Separacion*/}
                    {/*Boton redondeano de color azul */}
                    <button className="btn btn-primary px-5" type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    )
}
