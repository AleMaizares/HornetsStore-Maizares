import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListCointainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detail" element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;