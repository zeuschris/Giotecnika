import { useState } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { useContext } from "react"


export const Login = () => {

    const [email, setEmail] = useState('')
    const {login, user} = useContext(LoginContext)
    console.log(user)
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login({
            email,
            password
        })
    }

    return (
        <div className="container-login">
            <form className="container my-5" onSubmit={handleSubmit}>

                <input
                    type={'email'}
                    className='form-control my-3'
                    placeholder="Escribe tu usuario"
                    value={email}
                    onChange={handleEmailChange}
                    minLength = {6}
                    maxLength = {25}
                    required
                />

                <input
                    type={'password'}
                    className='form-control my-3'
                    placeholder="Escribe tu contraseña"
                    value={password}
                    onChange={handlePassChange}
                    minLength = {5}
                    maxLength = {15}
                    required
                />

                <button className="btn btn-primary" type="submit">Entrar</button>
            </form>
        </div>
    )
}

