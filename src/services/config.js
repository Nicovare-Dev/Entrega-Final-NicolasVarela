import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chestudio-afb34.firebaseapp.com",
  projectId: "chestudio-afb34",
  storageBucket: "chestudio-afb34.appspot.com",
  messagingSenderId: "806012825691",
  appId: "1:806012825691:web:494ff9925fe7f6a24e4f7e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//////////////////////////////////////////////////////////////////////////////////


// const misProductos = [
//     { nombre: "Remera", stock: 100, precio: 1000, img: "../img/remera.jpg", idCat: "ropa", detail: "Esta es una remera naranja simple, buena para un dia de sol."},
//     { nombre: "Buzo", stock: 70, precio: 2000, img: "../img/buzo.jpg", idCat: "ropa", detail: "Buzo negro de algodon excelente para el invierno. Perfecto para poder salir de casa con frio."},
//     { nombre: "Zapatillas", stock: 60, precio: 1500, img: "../img/zapatillas.jpg", idCat:"calzado", detail: "Zapatillas urbanas buenas para todo. Te sirven hasta para jugar a la pelota"},
//     { nombre: "Gafas", stock: 50, precio: 1200, img: "../img/gafas.jpg", idCat: "accesorios", detail: "Buenas Gafas facheras facheritas. Espectaculares para tirar facha y que no te moleste el sol."}
// ]


// import {collection, doc, writeBatch} from "firebase/firestore"

// const subirProductos = async () => {
//     const batch = writeBatch(db)

//     const productosRef = collection(db, "productos")

//     misProductos.forEach((producto) => {
//         const nuevoDoc = doc(productosRef)
//         batch.set(nuevoDoc, producto)

//     })

//     try{
//         await batch.commit()
//         console.log("se subio bien")
//     } catch(error){
//         console.log("Error al subir")
//     }
// }

// subirProductos()