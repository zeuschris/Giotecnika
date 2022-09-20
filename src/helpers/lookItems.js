import itemsRef from "../components/ItemListContainer/ItemListContainer"
const lookItems = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(itemsRef)
            reject('Promesa Rechazada')
        },2000)
    })
}

export default lookItems