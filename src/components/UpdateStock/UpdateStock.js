import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStock = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const { id } = useParams();
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:4000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    return (
        <div>

            <h1>ID : {item._id} </h1>
            <div className='w-50 mx-auto rounded shadow-lg p-4'>
                <h2 className='bg-secondary text-white p-2 mt-2 rounded'>Update Quantity</h2>

                < form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input type="number" className='mb-4' placeholder='Your Quantity'{...register("Your Quantity", { min: 1, max: 100 })} />

                    {/* {errors.exampleRequired && <span>This field is required</span>} */}

                    <input type="submit" value="Add" />
                </form>
            </div >


            <div>
                <button onClick={() => navigate('/manage-item')} type="button" className="btn btn-link btn-lg bg-dark text-white mt-2 m-4">Manage Items</button>
            </div>
        </div>
    );
};

export default UpdateStock;