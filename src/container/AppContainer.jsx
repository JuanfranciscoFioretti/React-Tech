import React from 'react'
import Navbar from '../components/Navbar'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from '../container/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import ItemCount from '../components/ItemCount'

const AppContainer = () => {

    const welcome = 'Welcome to Tech House';
    
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categorie/:categorieId' element={<ItemListContainer/>}/>
                <Route path='/detail/:DetailId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<ItemListContainer/>}/>
            </Routes> 
            {/* <ItemCount/> */}
    
        </BrowserRouter>
        </>
    )
}

export default AppContainer