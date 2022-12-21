import React, { useState, useEffect } from 'react'
import { productFetch } from '../productsFetch';
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import Loader from '../components/Loader';

const ItemDetailContainer = () => {

    const [ loader, setLoader ] = useState(true);

    const [product, setProduct] = useState(true);

    const { DetailId } = useParams();

    useEffect(() => {
        productFetch()
        .then(res => {
            setProduct(res.find(product => product.id === DetailId))
        })
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    }, [])

    return (
        <>
            {
                loader ? 
                    <Loader/>
                :

                <ItemDetail data={product}/>
            }
        
        </>
    )
}

export default ItemDetailContainer