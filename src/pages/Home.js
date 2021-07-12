import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CompanyList from '../components/CompanyList';
import { auth } from '../service/firebase'
import { db } from '../service/firebase'
import '../index.css'
import { CONSTANTS } from '../components/Constants';


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
                            <h1 className="fw-light">{CONSTANTS.TICKET_INFO}</h1>
                            <p className="lead text-muted">
                                Compra tus tiquetes de manera fácil, ingresa con tu cuenta o crea una,
                                si tienes inconvenientes ingresa al chat y preguntale a un accesor
                            </p>

                            {auth().currentUser ?
                                <Link className="btn btn-submit px-5 mt-4" to="/company">{CONSTANTS.CREATE_A_NEW_COMPANY}</Link>
                                :
                                <>
                                    <Link className="btn btn-primary px-5 mr-3" to="/signup">{CONSTANTS.CREATE_NEW_ACCOUNT}</Link>
                                    <Link className="btn btn-secondary px-5 mr-2" to="/login">{CONSTANTS.SIGN_IN_WITH_AN_ACCOUNT}</Link>
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
