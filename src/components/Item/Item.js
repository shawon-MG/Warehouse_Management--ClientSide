import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ item }) => {

    const { _id, img, name, price, description, quantity, supplier } = item;

    const navigate = useNavigate();

    const navigateToUpdateStock = id => {
        navigate(`/update-stock/${id}`);
    }

    return (
        <div>
            <div className="cols">
                <div className="card h-100">
                    <img src={img} className="card-img-top w-50 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Product Name :</strong> {name}</h5>
                        <p className="card-text">{description}</p>
                        <h6 className="card-title"><strong>Price :</strong> {price}</h6>
                        <h6 className="card-title"><strong>Quantity</strong> : {quantity}</h6>
                        <h6 className="card-title"><strong>Supplier</strong> : {supplier}</h6>
                    </div>
                    <button onClick={() => navigateToUpdateStock(_id)} type="button" className="btn btn-secondary"> Update Stock </button>
                </div>
            </div>

        </div>

    );
};

export default Item;