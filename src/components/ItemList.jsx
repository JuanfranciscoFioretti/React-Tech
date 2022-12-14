import React from 'react'
import { useState, useEffect } from 'react'
import { productFecth } from '../productsFetch'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import Loader from './Loader';


const ItemList = () => {
    const [ loader, setLoader ] = useState(true);
    
    const [ products,  setProducts] = useState(true);

    useEffect(() => {
        productFecth()
        .then(res => {
            setProducts(res)
        })
        .catch( err => console.log(err))
        .finally(() => setLoader(false))
    }, [])

    return (
        <>
        {/* <div className="container"> */}
            <div className="row g-3">
                {
                    loader ? 
                        <Loader/>
                    : 

                    products.map((product) => 

                        <Item key={product.id} product={product}/> 
                    )
                }
            </div>
        {/* </div> */}

        </>
    )
}

export default ItemList