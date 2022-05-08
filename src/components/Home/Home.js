import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useLoadeddata from '../../hooks/useLoadeddata';
import Item from '../Item/Item';

const Home = () => {

    const [items] = useLoadeddata();
    console.log(items);

    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }

    return (
        <div>
            <Carousel >
                <CarouselItem>
                    <img className="rounded" width={1500} height={600} alt="900x500" src="https://i.ibb.co/WsJMggb/futuristic-hologram-smartwatch-wearable-technology-53876-108508.webp" />
                    <div className="carousel-caption">
                        <h2>Smart Watch</h2>
                        <p>We have in stocks available now. Best of the smart watches around the world. </p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img className="rounded" width={1500} height={600} alt="900x500" src="https://i.ibb.co/Vw5L3JD/modern-gamepads-127657-18487.jpg" />
                    <div className="carousel-caption">
                        <h2>Smart Gaming Accesories</h2>
                        <p>Top gaming products in stock form different brands.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <img className="rounded" width={1500} height={600} alt="900x500" src="https://i.ibb.co/dJ7Zh4T/driver-using-mobile-phone-searching-information-53876-96710.webp" />
                    <div className="carousel-caption">
                        <h2>Smart Car Accesories</h2>
                        <p>Have some accesories in car to maintain phone, laptop and more. Best products in stock right now.</p>
                    </div>
                </CarouselItem>
            </Carousel>


            <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
                {
                    items.slice(0, 6).map(item => <div key={item._id}>
                        <Item item={item}></Item>
                    </div>
                    )
                }
            </div>



            <div>
                <button onClick={() => navigate('/manage-item')} type="button" className="btn btn-link btn-lg bg-dark text-white mt-2 m-4">Manage Items</button>
            </div>

            <div className='p-4 w-75 mx-auto shadow-lg  rounded'>
                <h2 className='bg-secondary text-white w-25 mx-auto p-1 rounded'> Customer Review </h2>
                <Carousel>
                    <CarouselItem>
                        <img className="rounded" width={900} height={500} alt="900x500" src="https://i.ibb.co/1Zw1Z9f/handsome-young-businessman-shirt-eyeglasses-85574-6228.webp" />
                        <div className="carousel-caption bg-dark text-white w-50 mx-auto rounded">
                            <h2>Andru Smith</h2>
                            <p> <strong>I found this electronics warehouse has the best customer service team.</strong> </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="rounded" width={900} height={500} alt="900x500" src="https://i.ibb.co/hfBPDLc/attractive-guy-shirt-isolated-white-background-185193-73693.webp" />
                        <div className="carousel-caption bg-dark text-white w-50 mx-auto rounded">
                            <h2>Tomas Willman</h2>
                            <p> <strong>They provide the best cheap options available in the market.</strong> </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="rounded" width={900} height={500} alt="900x500" src="https://i.ibb.co/ky4MGns/yes-very-good-black-guy-smiling-showing-thumb-up-approval-like-agree-african-american-man-praise-goo.webp" />
                        <div className="carousel-caption bg-dark text-white w-50 mx-auto rounded">
                            <h2>William Burn</h2>
                            <p> <strong> Various type of products here with best brands in the market.</strong> </p>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>

            <div className='p-2 m-4'>
                <h2 className='bg-secondary text-white w-25 mx-auto p-1 mt-4 rounded'>Contact With US</h2>
                <div className='w-75 mx-auto rounded shadow-lg p-4'>
                    < form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-4' placeholder='Your Name'  {...register("name")} />
                        <input className='mb-4' placeholder='Email'  {...register("email")} />
                        <textarea className='mb-4' placeholder='Your Massage'  {...register("massage")} />

                        <input type="submit" value="Submit" />
                    </form>
                </div >
            </div>


            <div className='bg-dark mt-4 p-4 rounded'>
                <h5 className='mx-auto text-white'>Explore this site to know more about company</h5>
                <Link className='mx-auto text-white me-4 text-decoration-none' to='/'> Electronics Inventory</Link>
                <Link className='mx-auto text-white text-decoration-none' to='/blogs'> Blogs</Link>
            </div>

        </div>
    );
};

export default Home;