import Productos from "../productos/productos"
const lookItems = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(Productos)
            reject('Promesa Rechazada')
        },2000)
    })
}

export default lookItems