import { useState } from "react"
import "./Contador.css"


const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () =>{
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarContador = () =>{
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

  return (
    <>

    <div>
        <button onClick={restarContador} className="btn-contador"> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador} className="btn-contador"> + </button>
    </div>

    <button onClick={() => funcionAgregar(contador)} className="btn-contador"> Agregar al carrito </button>
    </>
  )
}

export default Contador