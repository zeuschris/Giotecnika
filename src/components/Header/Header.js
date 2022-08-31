import image from '../../assets/logo.png';
import './Header.scss'
export const Header = () => {
    return (
        <header className="header">
            <div>
            <a href='/#' rel="noopener noreferrer">
                <img src={image} className='logo' alt='logo'></img>
            </a>
            <input type='search' placeholder='Busca un producto' className='form-control search'></input>
            </div>
          <nav>
                <ul className="menu">
                    <a href="/#" rel="noopener noreferrer"><li>Inicio</li></a> 
                    <a href="/#" rel="noopener noreferrer"><li>Contacto</li></a> 
                    <a href="/#" rel="noopener noreferrer"><li>Crear Cuenta</li></a> 
                    <a href="/#" rel="noopener noreferrer"><li>Iniciar Sesión</li></a> 
                </ul>
          </nav>
            <main>
                <h1 className='main-title'>Productos</h1>
            </main>
        </header>
    )
}


