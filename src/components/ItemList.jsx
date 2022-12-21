import React from 'react'
import { useState, useEffect } from 'react'
import { productFetch } from '../productsFetch'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';
import Loader from './Loader';



const ItemList = () => {
    
    const [ loader, setLoader ] = useState(true);
    
    const [ products,  setProducts] = useState(true);

    const { categorieId } = useParams();

    useEffect(() => {

        if (categorieId) {
            productFetch()
            .then(res => {
                setProducts(res.filter(product => product.categorie === categorieId))
                // setProducts(res)
            })
            .catch( err => console.log(err))
            .finally(() => setLoader(false))

        } else {
            productFetch()
            .then(res => {
                setProducts(res)
            })
            .catch( err => console.log(err))
            .finally(() => setLoader(false))
        }
    }, [categorieId])

    return (
        <>
        {/* <div className="container"> */}
        <center>
            <div className="row g-4">
                {
                    loader ? 
                        <Loader/>
                    : 

                    products.map((product) => 

                        <Item key={product.id} product={product}/> 
                    )
                }
            </div>
        </center>
        {/* </div> */}

        </>
    )
}

export default ItemList