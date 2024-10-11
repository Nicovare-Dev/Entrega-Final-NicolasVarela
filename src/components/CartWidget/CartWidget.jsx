import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)
  
  return (
    <div className="contenedor">
      <Link to="/cart">
      <FaShoppingCart className="carrito"/>
      {
        cantidadTotal > 0 ? <strong className="quantity">{cantidadTotal}</strong> : null
      }
      </Link>  
    </div>
  )
}

export default CartWidget