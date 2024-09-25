import "./ItemDetail.css"
import Contador from "../Contador/Contador"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"


const ItemDetail = ({id, nombre, img, precio, detail, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados:" + cantidad)

    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
  }

  

  return (
    <div className="container">
        <img src={img} alt={nombre} />
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>{detail}</p>

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
        
    </div>
  )
}

export default ItemDetail