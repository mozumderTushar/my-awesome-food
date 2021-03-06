import React from 'react';
import './FoodItem.css'

const FoodItem = (props) => {
    const {title, img, price} = props.food
    return (
        <div className="col-md-4">
            <div className="single-item text-center my-4">
                <div className="card p-2">
                    <img src={img} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h4 className="price">{price}</h4>
                        <button className="btn btn-sm btn-primary" onClick={()=>props.addToCart(props.food)}>Add to Cart</button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default FoodItem;