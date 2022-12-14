import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({product}) => {
    return (
        // <div className="container">
        //     <div className="row g-3">
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card card-size">
                        <img src={product.img} className="card-img-top img-card" alt="..."/>
                        <div className="card-body row">
                            <div className="col-9">
                                <h4 className="card-text">{product.name}</h4>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="col-3">
                                <button className='btn btn-outline-primary'>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        // </div>
            
    )
}

export default Item