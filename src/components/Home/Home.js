import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
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

            <div>
                <button onClick={() => navigate('/manage-item')} type="button" className="btn btn-link btn-lg bg-dark text-white mt-2 m-4">Manage Items</button>
            </div>

        </div>
    );
};

export default Home;