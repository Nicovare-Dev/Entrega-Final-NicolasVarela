import { useState, createContext } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import 'sweetalert2/src/sweetalert2.scss'
import { toast } from 'react-toastify';

export const CarritoContext = createContext({
carrito: [],
total: 0,
cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);

const [total, setTotal] = useState(0);

const [cantidadTotal, setCantidadTotal] = useState(0);

const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
        setCarrito((prev) => [...prev, { item, cantidad }]);
        setCantidadTotal((prev) => prev + cantidad);
        setTotal((prev) => prev + item.precio * cantidad);
    } else {
    const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
            return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
            return prod;
        }
    });
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
};

const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    toast.error(`Eliminaste ${productoEliminado.item.nombre}`, {
        position: "top-right",
        autoClose: 2500,
        theme: "dark",
        closeOnClick: true,
        pauseOnHover: true,
    })

    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
};

const vaciarCarrito = () => {
    Swal.fire({
        title: "Estas seguro?",
        text: "Vas a tener que volver a elegir todos los productos nuevamente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy seguro",
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: "Eliminados",
            text: "Todos los productos fueron eliminados",
            icon: "success",
        });
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }
    });
};

const vaciarCarrito2 = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
};

return (
    <CarritoContext.Provider
    value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
        vaciarCarrito2,
    }}
    >
    {children}
    </CarritoContext.Provider>
  );
};
