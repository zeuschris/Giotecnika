import mochila from '../assets/mochila.jpeg'
import audrey from '../assets/audrey.jpg'
import boligrafo from '../assets/boligrafo-parker.png'
import boligrafoMetal from '../assets/boligrafo-metal.jpg'
import boligrafoDoradoRosa from '../assets/boligrafo-dorado-rosa.jpg'
import mochilaRosa from '../assets/bolso-rosa.jpg'
// import mochilaMorada from '../assets/bolso-morado.jpg'

const Productos = [

    // Mochilas
    
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
        stock : 2,
        shippingFree : 'Gratis' 
    },

    {   id: 2,
        img : mochilaRosa,
        name : 'Mochila Lifestyle',
        price : 12000,
        descript : 'El modelo es nuevo. De lineas simples y capacidad ideal',
        category : 'mochilas',
        gender : 'Unisex',
        material : '100% Poliéster',
        warranty : 'Contra defecto de fabricación',
        talle : 'Único',
        stock : 9,
        shippingFree : 'Gratis' 
    },

    // ---------------------------------------------------------------------------

    // Boligrafos
    
    {   id : 3,
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

    {   id : 4,
        img : boligrafoMetal,
        name : 'Boligrafo de Metal',
        price : 7500,
        descript : 'Bolígrafos de Metal con patrón negro y plateado',
        category : 'boligrafos',
        gender : 'Hombre',
        warranty : 'Sin garantia',
        material : 'Metal',
        case : 'Si',
        stock : 34,
        shippingFree : 'Gratis'
    },

    {   id : 5,
        img : boligrafoDoradoRosa,
        name : 'Bolígrafo Clásico Rosa',
        price : 7500,
        descript : 'Este elegante bolígrafo se ha diseñado para hacer volar la imaginación.',
        category : 'boligrafos',
        gender : 'Hombre',
        warranty : 'Sin garantia',
        material : 'Metal y Cristales',
        case : 'Si',
        stock : 34,
        shipping: 345
    },

    // ---------------------------------------------------------------------------

    // Cuadros

    {   id : 6,
        img : audrey,
        name : 'Cuadro de Audrey',
        price : 17500,
        descript : 'Cuadro Breakfast at Tiffany\'s Audrey Hepburn',
        category : 'cuadros',
        gender : 'Unisex',
        warranty : 'Sin garantia',
        case : 'Negro',
        stock : 2,
        shipping : 400
    }

    // ---------------------------------------------------------------------------
    
]

export default Productos