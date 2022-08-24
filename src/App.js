import NavScrollExample from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselcomponent from "./Components/Carousel/Carousel";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <NavScrollExample />
      </Routes>
      <Carouselcomponent />
      <ItemListContainer greeting={"Está es mi tienda online"} />
      <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;
