import React from 'react'
import '../index.css'
import { db } from '../service/firebase'
import { CONSTANTS } from '../components/Constants'
export default function CompanyItem({ company }) {

    const { idCompany, logo, title, info, url } = company;

    const deleteCompany = () => {
        db.ref(CONSTANTS.COMPANYS).child(idCompany).remove();
    }

    return (
        <div className="card sizeTarget">
            <img src={logo} className="card-img-top" alt="Logo empresa" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{info}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">{CONSTANTS.VIEW}</a>
                <br></br>
                <button type="button" className="btn btn-danger float-left" onClick={deleteCompany}>{CONSTANTS.DELETE}</button>
            </div>
        </div>
    )
}
