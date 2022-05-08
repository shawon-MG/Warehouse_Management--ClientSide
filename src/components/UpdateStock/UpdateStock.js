
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStock = () => {

    // ----Loading a specefic data by _id -------------
    const { id } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:4000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);

    const { name, img, price, quantity, supplier, description } = item;

    // ---------Updating quantity by adding number--------
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newQuantity = parseInt(data.quantity) + parseInt(quantity);
        const newData = { quantity: newQuantity };

        const url = `http://localhost:4000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Quantity Updated');
            })
        reset();
    };

    const handleDelivered = () => {
        const newQuantitydata = parseInt(quantity) - 1;
        const newData = { quantity: newQuantitydata };
        const url = `http://localhost:4000/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Quantity Updated');
            })
        reset();
    };


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
                <div className="col mx-auto">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><strong>Product Name :</strong> {name}</h5>
                            <p className="card-text">{description}</p>
                            <h6 className="card-title"><strong>Price :</strong> {price}</h6>
                            <h6 className="card-title"><strong>Quantity</strong> : {quantity}</h6>
                            <h6 className="card-title"><strong>Supplier</strong> : {supplier}</h6>
                        </div>
                        <button onClick={handleDelivered} type="button" className="btn btn-secondary"> Delivered </button>
                    </div>
                </div>

            </div>

            <div className='w-50 mx-auto rounded shadow-lg p-4'>
                <h2 className='bg-secondary text-white p-2 mt-2 rounded'>Update Quantity</h2>

                < form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input type="number" name='quantity' className='mb-4' placeholder='Your Quantity'{...register("quantity", { min: 1, max: 100 })} />

                    <input type="submit" value="Add" />
                </form>
            </div >

            <div>
                <button onClick={() => navigate('/manage-item')} type="button" className="btn btn-link btn-lg bg-dark text-white mt-2 m-4">Manage Items</button>
            </div>
        </div >
    );
};

export default UpdateStock;