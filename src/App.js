import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListCointainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";

function App(){
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;