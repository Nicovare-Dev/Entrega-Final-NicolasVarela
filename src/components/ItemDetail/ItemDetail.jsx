import "./ItemDetail.css"

const ItemDetail = ({id, nombre, img, precio, detail}) => {
  return (
    <div className="container">
        <img src={img} alt={nombre} />
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>{detail}</p>
    </div>
  )
}

export default ItemDetail