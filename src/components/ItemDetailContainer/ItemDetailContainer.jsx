import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import {getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(() => {
      const nuevoDoc = doc(db, "productos", idItem)

      getDoc(nuevoDoc)
      .then((response) => {
        const data = response.data()
        const nuevoProducto = {id:response.id, ...data}
        setProducto(nuevoProducto)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer