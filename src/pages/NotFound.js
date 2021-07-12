import React from 'react'
import { CONSTANTS } from '../components/Constants'
import '../index.css'

export default function NotFound() {
    return (
        <div className="py-5 text-center container">
            <h1>{CONSTANTS.ERROR_PAGE}</h1>
            <section class="error-container">
                <span><span>{CONSTANTS.FOUR_NUMBER}</span></span>
                <span>{CONSTANTS.CERO_NUMBER}</span>
                <span><span>{CONSTANTS.FOUR_NUMBER}</span></span>
            </section>
            <div className="link-container">
                <a target="_blank" rel="noreferrer" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" className="more-link">Visit the original article</a>
            </div>
        </div>
    )
}
