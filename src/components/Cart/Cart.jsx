import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {

    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <div className="cart-container0">
                <h2 className="cart-title">No hay Productos en el carrito</h2>
                <Link to="/" className="cart-link1">Comprar productos</Link>
            </div>
        )
    }

  return (
    <div className="cart-container1">
        <div>
        {
            carrito.map((producto) => <CartItem key={producto.item.id} {...producto}/> )
        }
        </div>
        <div className="cart-container2">
        <h3 className="cart-quantity">Cantidad total de productos: {cantidadTotal}</h3>
        <h3 className="cart-total">Total: ${total}</h3>

        <button onClick={vaciarCarrito} className="cart-button">Vaciar carrito</button>
        <Link to="/checkout" className="cart-link">Finalizar Compra</Link>
        </div>
    </div>
  )
}

export default Cart