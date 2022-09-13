import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
//import ItemListContainer from "./containers/ItemListCointainer";

function App(){
  return (
    <>
        <div className="App">
            <NavBar/>
            {/* <ItemListContainer/> */}
            <ItemDetailContainer/>
        </div>
    </>
  );
}

export default App;