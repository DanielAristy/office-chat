import React from 'react'
import CompanyItem from './CompanyItem'

export default function CompanyList({ companies }) {
    return (
        <>
            {
                companies.map(company => {
                    return <CompanyItem key={company.idCompany} company={company} />
                })
            }
        </>
    )
}
