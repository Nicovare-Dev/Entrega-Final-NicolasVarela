import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img,}) => {
    return (
    <div className="item-container">
        <img src={img} alt={nombre} className="item-img"/>
        <h3 className="item-title">{nombre}</h3>
        <p className="item-price">${precio}</p>
        <Link to={`/item/${id}`} style={{textDecoration: 'none'}} >
        <p className="item-button">Ver detalles</p>
        </Link>
    </div>
    )
  }

export default Item