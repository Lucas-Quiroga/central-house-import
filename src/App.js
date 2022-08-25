import NavScrollExample from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselcomponent from "./Components/Carousel/Carousel";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavScrollExample />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"Está es mi tienda online"} />}
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting={"Está es mi tienda online"} />}
        />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/landing" element={<Carouselcomponent />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
