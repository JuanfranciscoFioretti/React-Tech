import React from 'react'
import { useState } from 'react'

const ItemCount = () => {

    const [ count, setCount ] = useState(0);
    const [ date, setDate ] = useState(Date());

    const countAdd = () => {
        setCount(count + 1);
        setDate(Date());
    }

    const countRemove = () => {
        setCount(count - 1);
        setDate(Date());
    }


    return (
        <>
            <div className='row' id='divItemCount'>
                <h1 className='whiteTextItemCount'>This is the Item Count</h1>
                <h2 className='whiteTextItemCount'>Quantity of clicks: {count}</h2>
                <h2 className='whiteTextItemCount'>Date & time: {date}</h2>
                <button className='btn btn-outline-primary' onClick={countAdd}>+</button>
                <br />
                <hr />
                <button className='btn btn-outline-primary' onClick={countRemove}>-</button>
            </div>
        </>
    )
}

export default ItemCount