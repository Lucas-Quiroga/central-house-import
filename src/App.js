import NavScrollExample from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavScrollExample />
      <ItemListContainer greeting={"Está es mi tienda online"} />
    </>
  );
}

export default App;
