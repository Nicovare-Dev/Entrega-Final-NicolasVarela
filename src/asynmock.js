const misProductos = [
    { id: "1", nombre: "Remera", precio: 1000, img: "../img/remera.jpg", idCat: "ropa", detail: "Esta es una remera naranja simple, buena para un dia de sol."},
    { id: "2", nombre: "Buzo", precio: 2000, img: "../img/buzo.jpg", idCat: "ropa", detail: "Buzo negro de algodon excelente para el invierno. Perfecto para poder salir de casa con frio."},
    { id: "3", nombre: "Zapatillas", precio: 1500, img: "../img/zapatillas.jpg", idCat:"calzado", detail: "Zapatillas urbanas buenas para todo. Te sirven hasta para jugar a la pelota"},
    { id: "4", nombre: "Gafas", precio: 1200, img: "../img/gafas.jpg", idCat: "accesorios", detail: "Buenas Gafas facheras facheritas. Espectaculares para tirar facha y que no te moleste el sol."}
]

export const getProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve,) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100);
    })
}

export const ProductoCat = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === id)
            resolve(producto)
        }, 100);
    })
}