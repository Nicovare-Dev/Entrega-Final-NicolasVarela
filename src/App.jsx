import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
