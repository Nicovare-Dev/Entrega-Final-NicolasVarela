import "./Checkout.css"
import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom"

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")

    const {carrito, vaciarCarrito2, total} = useContext(CarritoContext)

    const navigate = useNavigate()

    const manejadorFormulario = (e) => {
        e.preventDefault()

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, complete todos los campos")
            return
        }
        
        if(email !== emailConfirmacion){
        setError("Los email no coinciden")
        return
        }   

    const orden = {
        items: carrito.map (producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
    }

    addDoc(collection(db, "ordenes"), orden)
    .then(docRef => {
        vaciarCarrito2()
        setNombre("")
        setApellido("")
        setTelefono("")
        setEmail("")
        setEmailConfirmacion("")
        setError("")

        Swal.fire({
            icon: "success",
            title: "Gracias por tu compra!",
            text: "Tu orden de compra es: " + docRef.id,
        }).then(() => {
            navigate("/")
        })
    })
    .catch(error => {
        console.log("error al crear la orden", error)
        setError("error al crear la orden")
    })
}

  return (<>
    <h2 className="checkout-title">Checkout</h2>
    <div className="checkout-container">
        

        
            <div className="check">
            {
                carrito.map(producto => (
                    <div key={producto.item.id} className="check-container">
                        <p className="checkout-name">{producto.item.nombre}</p>
                        <p className="checkout-price">{producto.item.precio}  x {producto.cantidad}</p>
                        <p className="checkout-multiply">${producto.item.precio * producto.cantidad}</p>


                    </div>
                    
                ))
            }
            {
                <div className="checkout-total">
                    <p>Total: ${total}</p>
                </div>
            }
            </div>


        <form onSubmit={manejadorFormulario} className="checkout-form">
            <div className="checkout-div">
                <label className="checkout-label">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="checkout-div">
                <label className="checkout-label">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
            </div>
            <div className="checkout-div">
                <label className="checkout-label">Telefono</label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
            </div>
            <div className="checkout-div">
                <label className="checkout-label">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="checkout-div">
                <label className="checkout-label">Confirma tu email</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} value={emailConfirmacion}/>
            </div>

            {
                error && <p className="checkout-error">  {error}</p>
            }

            <button type="submit" className="checkout-button">Confirmar Compra</button>
        </form>
    </div>
    </>
  )
}

export default Checkout