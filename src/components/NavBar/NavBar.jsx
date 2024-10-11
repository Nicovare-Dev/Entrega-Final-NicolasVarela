import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" style={{textDecoration: 'none'}}>
        <img src="./img/Logo.jfif" alt="CheStudio Logo" className="Logo"/>
      </Link>
        <nav>
            <ul>
                <NavLink to="categoria/ropa" style={{textDecoration: 'none'}}>
                <li>Ropa</li>
                </NavLink>
                <NavLink to="categoria/calzado" style={{textDecoration: 'none'}}>
                <li>Calzado</li>
                </NavLink>
                <NavLink to="categoria/accesorios" style={{textDecoration: 'none'}}>
                <li>Accesorios</li>
                </NavLink>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    </>
  )
}

export default NavBar