import '../styles/Navbar.css';
import CartWidget from './CartWidget';
const Navbar = () => {

  return (
    <nav className="nav-container">
        <img src='../farmachi.png' className="logo"></img>  <a> FarmaCHI </a>
        <div className='a-container'>
            <a> Inicio </a>
            <a> Ofertas </a>
            <a> Productos </a>
            <a> Más vendidos </a>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar;