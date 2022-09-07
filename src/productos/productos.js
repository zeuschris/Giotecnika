import mochila from '../assets/mochila.jpeg'
import boligrafo from '../assets/boligrafo-parker.png'
import audrey from '../assets/audrey.jpg'

const Productos = [
    
    {   id: 1,
        img : mochila,
        name : 'Mochila Jeansport',
        price : 10000,
        descript : 'Una mochila diseñada para resistirlo todo',
        category : 'mochilas',
        gender : 'Unisex',
        material : '100% Poliéster',
        warranty : 'Contra defecto de fabricación',
        talle : 'Único',
        stock : 10,
        shippingFree : 'Gratis' 
    },
    
    {   id : 2,
        img : boligrafo,
        name : 'Boligrafo Parker',
        price : 9500,
        descript : 'Con adornos y clip de color dorado',
        category : 'boligrafos',
        gender : 'Hombre',
        warranty : '1 Mes',
        case : 'Si',
        stock : 10,
        shipping : 225
    },

    {   id : 3,
        img : audrey,
        name : 'Cuadro de Audrey',
        price : 17500,
        descript : 'Cuadro Breakfast at Tiffany\'s Audrey Hepburn',
        category : 'cuadros',
        gender : 'Unisex',
        warranty : 'Sin garantia',
        case : 'Negro',
        stock : 10,
        shipping : 400
    }
    
    ]

export default Productos