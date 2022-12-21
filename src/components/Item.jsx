import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        // <div className="container">
        //     <div className="row g-3">
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card card-size">
                        <center>
                            <img src={product.img} className="card-img-top img-card" alt="..."/>
                        </center>
                        <div className="card-body row card-text">
                            <div className="col-9">
                                <h4 className="card-text">{product.name}</h4>
                                <h6 className="card-text product-description">{product.description}</h6>
                            </div>
                            <div className="col-3">
                            <Link to={`/detail/${product.id}`}>
                                <button className='btn btn-outline-primary'>Info</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        // </div>
            
    )
}

export default Item