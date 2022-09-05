import mochila from '../assets/mochila.jpeg'
import boligrafo from '../assets/boligrafo-parker.png'
import audrey from '../assets/audrey.jpg'

const Productos = [
    
    {   id: 1,
        img : mochila,
        name : 'mochila jeansport',
        price : 10000,
        descript : 'Una mochila diseñada para resistirlo todo',
        category : 'mochilas',
        stock : 10,
        shipping : 15 
    },
    
    {   id : 2,
        img : boligrafo,
        name : 'Boligrafo Parker',
        price : 9500,
        descript : 'Con adornos y clip de color dorado',
        category : 'boligrafos',
        stock : 10,
        shipping : 15
    },

    {   id : 3,
        img : audrey,
        name : 'Cuadro de Audrey',
        price : 17500,
        descript : 'Para colgar sobre una cama o sillón',
        category : 'cuadros',
        stock : 10,
        shipping : 25
    }
    
    ]

export default Productos