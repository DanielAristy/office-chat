import React from 'react'
import '../index.css'

export default function CompanyItem({ company }) {

    const { id, logo, title, info, url } = company;

    return (
        <div className="card sizeTarget" key={id}>
            <img src={logo} class="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{info}</p>
                <a href={url} target="_blank" className="btn btn-primary">Ir a ver</a>
            </div>
        </div>
    )
}
