import { createContext, useContext } from "react"
import { useState } from "react"

export const LoginContext = createContext()

const users = [
    
    {
        email : 'admin@gmail.com',
        password : '123456'
    },
]

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        user : '',
        log : true,
        error : ''
    })

    const login = (values) => {
        const match = users.find(user => (user.email === values.email)) 

        if (match) {
            if (match.password === values.password){
                setUser({
                    user : match.email,
                    log : true,
                    error : ''
                })
            }else {
                setUser({
                    user : '',
                    log : false,
                    error : alert('Password incorrecto')
                })
            }
        }else {
            setUser({
                user : '',
                log : false,
                error : alert('Email incorrecto')
            })
        }
    }

    const logout = () => {
        setUser({
            user : '',
            log : false,
            error : ''
        })
    }

    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}