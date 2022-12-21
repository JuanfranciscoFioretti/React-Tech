import React from 'react'

const ItemDetail = ({data}) => {
    return (
        <div className="detailsBig">
            <div className="details">
                <div className="big-img">
                    <img src={data.img} alt="" />
                </div>

                <div className="box">
                    <div className="row">
                        {/* <h2> This is the title of the product</h2> */}
                        <h2>{data.name}</h2>
                        <span>${data.price}</span>
                        <span>${data.stock}</span>
                    </div>
                    <p>{data.description}</p>
                    {/* <p>{data.content}</p> */}

                    <div className="thumb">
                        {
                            data.src.map(img => (
                                <img src={img} alt="" srcset="" />
                            ))
                        }
                    </div>

                    <button className='cart'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail