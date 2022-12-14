import React from 'react'
import ItemList from '../components/ItemList'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = ({welcome}) => {

    return (
        <>
            <div className='container'>
                <div id='divItemListContainer'>
                    {/* { welcome } */}
                    <ItemList/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer