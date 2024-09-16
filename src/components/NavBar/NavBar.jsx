import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <header>
      <Link to="/">
        <h1>CHEstudio</h1>
      </Link>
        <nav>
            <ul>
                <NavLink to="categoria/ropa">
                <li>Ropa</li>
                </NavLink>
                <NavLink to="categoria/calzado">
                <li>Calzado</li>
                </NavLink>
                <NavLink to="categoria/accesorios">
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