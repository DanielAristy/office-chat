import React, { Component } from "react";
import { auth } from "../service/firebase"

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
        }
    }
    render() {
        return (
            <div className="py-5 text-center container">
                <div className="py-5 mx-3">
                    Login in as: <strong className="text-info">{this.state.user.email}</strong>
                </div>
            </div>
        )
    }

}