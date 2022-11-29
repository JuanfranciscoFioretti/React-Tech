import React from 'react'
import Navbar from '../components/Navbar'
import ItemListContainer from './ItemListContainer'

const AppContainer = () => {

    const welcome = 'Welcome to Tech House'
    return (
        <>
            <Navbar/>
            <ItemListContainer welcome={welcome}/>
        </>
    )
}

export default AppContainer