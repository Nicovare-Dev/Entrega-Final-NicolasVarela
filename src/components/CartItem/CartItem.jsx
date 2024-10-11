import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import "./CartItem.css"


const CartItem = ({item, cantidad}) => {

  const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className="cart-item"> 
      <img src={item.img} alt={item.nombre} className="cart-img"/>
      <h4>{item.nombre} </h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio u/: ${item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem