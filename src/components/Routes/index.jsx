import React from 'react';
import NavBar from "../../components/NavBar";
import ItemListContainer from "../../containers/ItemListCointainer";
import ItemDetailContainer from "../../containers/ItemDetailContainer";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import NotFound from "../../components/NotFound";
import Cart from '../../containers/CartContainer';
import TitlesMain from '../Titles';

const Routing = () => {
  return (
    <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<><TitlesMain/><ItemListContainer/></>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Routing;