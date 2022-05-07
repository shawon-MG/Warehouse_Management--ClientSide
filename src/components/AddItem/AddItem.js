import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:4000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('result', result);
            })
        reset();

    };

    return (
        <div className='w-50 mx-auto rounded shadow-lg p-4'>
            <h2 className='bg-secondary text-white p-2 mt-2 rounded'>Add Items As You Want</h2>

            < form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-4' placeholder='Product Name'  {...register("name")} />

                <input className='mb-4' placeholder='Photo URL' {...register("img", { required: true })} />

                <textarea className='mb-4' placeholder='Product Description'  {...register("description")} />

                <input className='mb-4' placeholder='Price' {...register("price", { required: true })} />

                <input className='mb-4' placeholder='Quantity' {...register("quantity", { required: true })} />


                <input className='mb-4' placeholder='Supplier Name'{...register("supplier")} />

                <input type="submit" value="Add Items" />
            </form>
        </div >
    );
};

export default AddItem;