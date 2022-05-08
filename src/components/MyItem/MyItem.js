import React from 'react';
import useLoadeddata from '../../hooks/useLoadeddata';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.config';


const MyItem = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useLoadeddata();

    const handleDeleteOneItem = id => {
        const email = user.email;
        const procced = window.confirm('Are You Sure?');
        if (procced) {
            const url = `http://localhost:4000/items/${email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                });
        }
    }
    return (
        <div>
            <h2>My Item : If you are signed in you can operate from here</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
                {
                    items?.map(item =>
                        <div>
                            <div className="col">
                                <div className="card h-100 w-75 mx-auto">
                                    <img src={item.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Product Name :</strong> {item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <h6 className="card-title"><strong>Price :</strong> {item.price}</h6>
                                        <h6 className="card-title"><strong>Quantity</strong> : {item.quantity}</h6>
                                        <h6 className="card-title"><strong>Supplier</strong> : {item.supplier}</h6>
                                    </div>

                                    <button onClick={() => handleDeleteOneItem(item._id)} type="button" className="btn btn-secondary">Delete Item</button>

                                </div>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;