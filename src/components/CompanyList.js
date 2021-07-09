import React, { Fragment } from 'react'
import CompanyItem from './CompanyItem'

export default function CompanyList({ companies }) {
    return (
        <Fragment>
            {
                companies.map(company => {
                    return <CompanyItem key={company.id} company={company} />
                })
            }
        </Fragment>
    )
}
