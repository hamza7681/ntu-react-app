import React from 'react';
import logo1 from '../../Assets/1.png';
import logo2 from '../../Assets/2.png';
import logo3 from '../../Assets/3.jpg';
import logo4 from '../../Assets/4.jpg';
import logo5 from '../../Assets/5.jpg';
import logo6 from '../../Assets/6.jpg';
import logo7 from '../../Assets/7.jpg';
import logo8 from '../../Assets/8.jpg';
import logo9 from '../../Assets/9.jpg';
import {Carousel} from 'react-bootstrap';


function Slider() {
    return (
        <>
            <Carousel indicators={false} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo6}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo7}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo8}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo9}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )

}

export default Slider;