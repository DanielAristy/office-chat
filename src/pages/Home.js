import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CompanyList from '../components/CompanyList';
import '../index.css'
import { PrivateRoute } from '../routers/PrivateRoute'
const KEY = "officeChat.companies"

export default function Home() {

    const [companies, setCompanies] = useState([
        {
            id: 1,
            logo: "https://www.terminalesmedellin.com/wp-content/uploads/2016/12/logo-rapido-ochoa.jpg",
            title: "Rapido Ochoa",
            info: "Somos una empresa dedicada al transporte terrestre de pasajeros y carga, nuestra operación inició el 25 de Junio de 1958 en la ciudad de Medellín...",
            url: "https://rapidoochoa.com"
        },
        {
            id: 2,
            logo: "https://www.terminalesmedellin.com/wp-content/uploads/2016/12/logo-coomotor.jpg",
            title: "Coomotor",
            info: "Es una empresa de transporte terrestre nacional de pasajeros y encomiendas, que crece continuamente para contribuir al desarrollo sostenible del país...",
            url: "https://coomotor.com.co"
        },
        {
            id: 3,
            logo: "https://omega.com.co/wp-content/uploads/2018/02/omega-transportadora-logo.png",
            title: "Omega",
            info: "En el año de 1948 se reunieron varios transportadores en el municipio de Togüí (Boyacá). Entre ellos Isaías Sánchez, Donato Sánchez, Jeremías Ruiz y Segundo Ruiz...",
            url: "https://omega.com.co"
        },
        {
            id: 4,
            logo: "https://www.terminalesmedellin.com/wp-content/uploads/2017/03/Expreso-Bolivariano.jpg",
            title: "Bolivariano",
            info: "Es una empresa de transporte colombiana orientada a brindar un servicio de calidad a los pasajeros en donde la seguridad, la comodidad y la mejor tecnología en buses y terminales está respaldada...",
            url: "https://www.bolivariano.com.co"
        }
    ]);


    useEffect(() => {
        const storedCompanies = JSON.parse(localStorage.getItem(KEY))
        if (setCompanies) {
            setCompanies(storedCompanies);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(companies))
    }, [companies])


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
                        <Link className="btn btn-secondary px-5 mr-2" to="/login">Ingresar con una cuenta</Link>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container target">
                    <CompanyList companies={companies} />
                </div>
            </div>

        </>
    )
}
