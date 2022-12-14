import React from 'react'
import ItemCount from '../components/ItemCount'
import Navbar from '../components/Navbar'
import ItemListContainer from './ItemListContainer'

const AppContainer = () => {

    const welcome = 'Welcome to Tech House';
    
    return (
        <>
            <Navbar/>
            <ItemListContainer welcome={welcome}/>
            {/* <ItemCount/> */}
        </>
    )
}

export default AppContainer