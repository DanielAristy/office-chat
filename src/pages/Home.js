import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

export default function Home() {

    const sizeCard = {
        width: '18rem',
    }

    const cards = {
        display: 'flex',
        justifyContent: 'space-evenly'
    }

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Informacion de Tiquetes</h1>
                        <p className="lead text-muted">
                            Compra tus tiquetes de manera fácil, ingresa con tu cuenta o crea una,
                            si tienes inconvenientes ingresa al chat y preguntale a un accesor
                        </p>
                        <Link className="btn btn-primary px-5 mr-3" to="/signup">Crear Nueva Cuenta</Link>
                        <Link className="btn btn-secondary my-2" to="/login">Ingresar con una cuenta</Link>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container target">
                    <div className="card sizeTarget">
                        <img src="https://www.terminalesmedellin.com/wp-content/uploads/2016/12/logo-rapido-ochoa.jpg" class="card-img-top" alt="logo rapido ochoa" />
                        <div className="card-body">
                            <h5 className="card-title">Rapido Ochoa</h5>
                            <p className="card-text">
                                Somos una empresa dedicada al transporte terrestre de pasajeros y carga, nuestra
                                operación inició el 25 de Junio de 1958 en la ciudad de Medellín...</p>
                            <a href="https://rapidoochoa.com" target="_blank" className="btn btn-primary">Ir a ver</a>
                        </div>
                    </div>
                    <div className="card sizeTarget">
                        <img src="https://www.terminalesmedellin.com/wp-content/uploads/2016/12/logo-coomotor.jpg" class="card-img-top" alt="logo rapido ochoa" />
                        <div className="card-body">
                            <h5 className="card-title">Coomotor</h5>
                            <p className="card-text">
                                Es una empresa de transporte terrestre nacional de pasajeros y encomiendas,
                                que crece continuamente para contribuir al desarrollo sostenible del país...</p>
                            <a href="https://coomotor.com.co" target="_blank" className="btn btn-primary">Ir a ver</a>
                        </div>
                    </div>
                    <div className="card sizeTarget">
                        <img src="https://omega.com.co/wp-content/uploads/2018/02/omega-transportadora-logo.png" class="card-img-top" alt="logo rapido ochoa" />
                        <div className="card-body">
                            <h5 className="card-title">Omega</h5>
                            <p className="card-text">
                                En el año de 1948 se reunieron varios transportadores en el municipio de Togüí (Boyacá).
                                Entre ellos Isaías Sánchez, Donato Sánchez, Jeremías Ruiz y Segundo Ruiz...</p>
                            <a href="https://omega.com.co" target="_blank" className="btn btn-primary">Ir a ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
