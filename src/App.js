import NavScrollExample from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselcomponent from "./Components/Carousel/Carousel";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavScrollExample />
      <Carouselcomponent />
      <ItemListContainer greeting={"Está es mi tienda online"} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
