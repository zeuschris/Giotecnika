import mochila from '../assets/mochila.jpeg'
import boligrafo from '../assets/boligrafo-parker.png'
import audrey from '../assets/audrey.jpg'

const Productos = [
    
    {   id: 1,
        img : mochila,
        name : 'Mochila Jeansport',
        price : 10000,
        descript : 'Una mochila diseñada para resistirlo todo',
        category : 'Mochilas',
        gender : 'Unisex',
        material : '100% Poliéster',
        warranty : 'Contra defecto de fabricación',
        talle : 'Único',
        stock : 10,
        shipping : 'Gratis' 
    },
    
    {   id : 2,
        img : boligrafo,
        name : 'Boligrafo Parker',
        price : 9500,
        descript : 'Con adornos y clip de color dorado',
        category : 'Boligrafos',
        gender : 'Male',
        warranty : '',
        stock : 10,
        shipping : 15
    },

    {   id : 3,
        img : audrey,
        name : 'Cuadro de Audrey',
        price : 17500,
        descript : 'Para colgar sobre una cama o sillón',
        category : 'Cuadros',
        gender : 'Unisex',
        warranty : '',
        stock : 10,
        shipping : 25
    }
    
    ]

export default Productos