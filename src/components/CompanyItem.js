import React from 'react'
import '../index.css'
import { db } from '../service/firebase'

export default function CompanyItem({ company }) {

    const { idCompany, logo, title, info, url } = company;

    const deleteCompany = () => {
        db.ref("companys").child(idCompany).remove();
    }

    return (
        <div className="card sizeTarget" key={idCompany}>
            <img src={logo} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{info}</p>
                <a href={url} target="_blank" className="btn btn-primary">Ir a ver</a>
                <br></br>
                <button type="button" class="btn btn-danger float-left" onClick={deleteCompany}>Eliminar</button>
            </div>
        </div>
    )
}
