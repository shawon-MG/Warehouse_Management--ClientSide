import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLoadeddata from '../../hooks/useLoadeddata';

const ManageItem = () => {

    const navigate = useNavigate();

    const { items } = useLoadeddata();
    return (
        <div>
            <h2 className='bg-secondary text-white w-50 p-1 mx-auto justify-content-center rounded'> <span className='bg-dark text-white m-1 ps-1 rounded'> {items.length} </span> Inventory items available now...</h2>

            {/* {
                items?.map(item =>
                    <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
                        <div className="col">
                            <div className="card h-100 w-75">
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Product Name :</strong> {item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <h6 className="card-title"><strong>Price :</strong> {item.price}</h6>
                                    <h6 className="card-title"><strong>Quantity</strong> : {item.quantity}</h6>
                                    <h6 className="card-title"><strong>Supplier</strong> : {item.supplier}</h6>
                                </div>
                                <button type="button" className="btn btn-secondary">Delete Item</button>
                            </div>
                        </div>

                    </div>)
            } */}

            <button onClick={() => navigate('/add-item')} type="button" className="btn btn-dark btn-lg mt-2 m-5">Add Items</button>
        </div>
    );
};

export default ManageItem;