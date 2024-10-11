import "./ItemDetail.css"
import Contador from "../Contador/Contador"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { toast } from 'react-toastify';


const ItemDetail = ({id, nombre, img, precio, detail, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio, img}
    agregarAlCarrito(item, cantidad)
    toast.success('Agregaste un producto al carrito', {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
      closeOnClick: true,
      pauseOnHover: true,
    })
  }

  

  return (
    <div className="item-detail-container">
        <img src={img} alt={nombre} className="item-detail-image"/>
        <h2 className="item-detail-title">Nombre: {nombre}</h2>
        <h3 className="item-detail-price">Precio: ${precio}</h3>
        <p className="item-detail-descriptionl">{detail}</p>
        <p className="item-detail-stock">Stock: {stock}</p>

        {
          agregarCantidad > 0 ? (<><Link to="/cart" className="item-detail-button"> Terminar Compra</Link> <Link to="/" className="item-detail-button">Ver mas productos</Link> </>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
        
    </div>
  )
}

export default ItemDetail