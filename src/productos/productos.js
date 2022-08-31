import mochila from '../assets/mochila.jpg'
import boligrafo from '../assets/boligrafo-parker.png'
import marilyn from '../assets/marilyn.jpg.crdownload'

const Productos = [
    
    {   id: 1,
        img : mochila,
        name : 'mochila jeansport',
        price : 10000,
        descript : 'Una mochila diseñada para resistirlo todo',
        stock : 10,
        shipping : 15 
    },
    
    {   id : 2,
        img : boligrafo,
        name : 'Boligrafo Parker',
        price : 9500,
        descript : 'Con adornos y clip de color dorado',
        stock : 10,
        shipping : 15
    },

    {   id : 3,
        img : marilyn,
        name : 'Cuadro de Marilyn Monroe',
        price : 12500,
        descript : 'Para colgar sobre una cama o sillón',
        stock : 10,
        shipping : 45
    }
    
    ]

export default Productos