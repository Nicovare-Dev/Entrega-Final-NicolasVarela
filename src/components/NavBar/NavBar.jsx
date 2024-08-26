import CartWidget from "../CarWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
    <header>
        <h1>CHEstudio</h1>

        <nav>
            <ul>
                <li>Ropa</li>
                <li>Calzado</li>
                <li>Accesorios</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    </>
  )
}

export default NavBar