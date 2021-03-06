import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { CONSTANTS } from '../components/Constants';
import { signin } from '../helpers/auth';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
            await signin(this.state.email, this.state.password);
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="container">
                <form
                    className="mt-5 py-5 px-5"/*Centrar el formulario*/
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <h1>
                        Login to
                        <Link className="title ml-2" to="/">{/*Separacion al lado izquierdo*/}
                            {CONSTANTS.OFFICE_CHAT}
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
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">{/*Separacion*/}
                        <input
                            /**form-control darle un tamañao hasta donde si limite el container */
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <div className="form-group">{/*Separacion*/}
                        {this.state.error ? (
                            <p>{this.state.error}</p>
                        ) : null}
                        {/*Boton redondeano de color azul */}
                        <button className="btn btn-primary px-5" type="submit">{CONSTANTS.LOGIN}</button>
                    </div>
                    <hr />
                    <p>
                        Don't have an account? <Link to="/signup">{CONSTANTS.SIGN_UP}</Link>
                    </p>
                </form>
            </div>
        )
    }

}
