import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListCointainer";

function App(){
  return (
    <>
        <div className="App">
            <NavBar/>
            <ItemListContainer title={"Camiseta:"} price={"$1.500"}/>
        </div>
    </>
  );
}

export default App;