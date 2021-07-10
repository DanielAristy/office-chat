import React, { Component } from 'react'
import { auth } from '../service/firebase'
import { db } from '../service/firebase'
import { v4 as uuidv4 } from 'uuid';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            idCompany: "",
            logo: "",
            title: "",
            info: "",
            url: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit(event) {

        event.preventDefault();
        let id = uuidv4();

        if (this.state.user) {
            await db.ref("companys").child(id).set({
                idCompany: id,
                user: this.state.user.uid,
                logo: this.state.logo,
                title: this.state.title,
                info: this.state.info,
                url: this.state.url
            }).catch(error => console.error(error.message))
        }
        this.setState({
            user: auth().currentUser,
            idCompany: "",
            logo: "",
            title: "",
            info: "",
            url: "",
        })

    }

    render() {
        return (
            <div className="py-5 container">
                <h1>Crear una nueva Empresa</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">URL logo</label>
                        <input type="text"
                            className="form-control"
                            placeholder="https://ejemplo.jpg"
                            value={this.state.logo}
                            name="logo"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre Empresa</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.title}
                            name="title"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                        <textarea type="text"
                            className="form-control"
                            placeholder="Ingresa una descripcion"
                            value={this.state.info}
                            name="info"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">URL del sitio web de la empresa</label>
                        <input
                            className="form-control"
                            placeholder="https://ejemplo.com"
                            value={this.state.url}
                            name="url"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" to="/">Guardar</button>
                </form>
            </div>

        );
    }

}
// const initialStateValues = {

    // logo: "",
    // title: "",
    // info: "",
    // url: "",
// };

// const [values, setValues] = useState(initialStateValues);

// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//     console.log(name, value);
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
// }
// return (
    // <div className="py-5 container">
    //     <h1>Register</h1>
    //     <form onSubmit={handleSubmit}>
    //         <div className="mb-3">
    //             <label className="form-label">URL logo</label>
    //             <input type="text"
    //                 className="form-control"
    //                 placeholder="https://ejemplo.jpg"
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div className="mb-3">
    //             <label className="form-label">Nombre Empresa</label>
    //             <input
    //                 type="text"
    //                 className="form-control"
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div className="mb-3">
    //             <label className="form-label">Descripcion</label>
    //             <textarea
    //                 className="form-control"
    //                 placeholder="Ingresa una descripcion"
    //                 name="content"
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div className="mb-3">
    //             <label className="form-label">URL del sitio web de la empresa</label>
    //             <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="https://ejemplo.com"
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <button type="submit" className="btn btn-primary">Guardar</button>
    //     </form>
    // </div>
// )