import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProductos, ProductoCat} from "../../asynmock"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(() =>{
    const funcionProductos = idCategoria ? ProductoCat : getProductos

    funcionProductos(idCategoria)
    .then(res => setProductos(res))
    
  }, [idCategoria])

  return (
    <>
      <h2>Mis productos</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer