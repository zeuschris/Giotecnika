import { useState } from "react"

export const Checkout = () => {

    const [values,setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

            const orden = {
                comprador: values,
                items : '',
                total : ''
        }

            if (values.email.length < 5) {
                alert('Correo invalido')
                return
            }

            if (values.nombre.length < 3) {
                alert('Nombre invalido')
                return
            }

            if (values.direccion.length < 2) {
                alert('Direccion invalida')
                return
            }

            console.log(orden)
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>

                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    className="my-4 form-control"
                    placeholder="Escribe tu nombre"
                    required
                />

                <input 
                    name="apellido"
                    onChange={handleInputChange}
                    value={values.apellido}
                    type={'text'}
                    className="my-4 form-control"
                    placeholder="Escribe tu apellido"
                    required
                />      

                <input 
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    className="my-4 form-control"
                    placeholder="Escribe tu email"
                    required
                />

                <input 
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    className="my-4 form-control"
                    placeholder="Dirección"
                    required
                />

                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>
    )
}
