import { useEffect, useState } from "react"
import { getUnProducto } from "../../asynmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(() => {
        getUnProducto(idItem)
            .then(response => setProducto(response))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer