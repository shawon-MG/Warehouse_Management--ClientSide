import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='w-50 mx-auto'>
            <h2 className='bg-secondary text-white p-2 mt-4'>Add Items As You Want</h2>

            < form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-4' placeholder='Product Name'  {...register("name")} />

                <input className='mb-4' placeholder='Photo URL' {...register("img", { required: true })} />

                <textarea className='mb-4' placeholder='Product Description'  {...register("description")} />

                <input className='mb-4' placeholder='Price' {...register("price", { required: true })} />

                <input className='mb-4' placeholder='Quantity' {...register("price", { required: true })} />


                <input className='mb-4' placeholder='Supplier Name'  {...register("name")} />

                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <input type="submit" value="Add Items" />
            </form>
        </div >
    );
};

export default AddItem;