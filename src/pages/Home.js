import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CompanyList from '../components/CompanyList';
import { auth } from '../service/firebase'
import { db } from '../service/firebase'
import '../index.css'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: [],
            loadingCompanys: false,
            readError: null,
        }
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingCompanys: true });
        try {
            db.ref("companys").on("value", snapshot => {
                let companys = [];
                snapshot.forEach((snap) => {
                    companys.push(snap.val());
                });
                this.setState({ companyList: companys });
                this.setState({ loadingCompanys: false });
                console.log(db.ref("companys"))
            });
        } catch (error) {
            this.setState({ readError: error.message, loadingCompanys: false });
        }
    }

    render() {
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

                            {auth().currentUser ?
                                <Link className="btn btn-submit px-5 mt-4" to="/register">Crear una nueva empresa</Link>
                                :
                                <>
                                    <Link className="btn btn-primary px-5 mr-3" to="/signup">Crear Nueva Cuenta</Link>
                                    <Link className="btn btn-secondary px-5 mr-2" to="/login">Ingresar con una cuenta</Link>    
                                </>
                            }

                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container target">
                        <CompanyList companies={this.state.companyList} />
                    </div>
                </div>
            </>
        )
    }

}
