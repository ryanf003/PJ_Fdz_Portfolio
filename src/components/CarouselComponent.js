import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


class MyCarousel extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={require('../img/Events/events-1.jpg')}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <Link to='/portfolio/3' className="carousel-link"><h3>Events</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={require('../img/Baby/baby-home.jpg')}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <Link to='/portfolio/0' className="carousel-link"><h3>Baby</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={require('../img/Family/family-home.jpg')}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <Link to='/portfolio/1' className="carousel-link"><h3>Family</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={require('../img/Maternity/maternity-home.jpg')}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Link to='/portfolio/2' className="carousel-link"><h3>Maternity</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={require('../img/Portraits/portraits-1.jpg')}
                    alt="Fifth slide"
                    />
                    <Carousel.Caption>
                    <Link to='/portfolio/4' className="carousel-link"><h3>Portraits</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={require('../img/Travel/travel-1.jpg')}
                    alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    <Link to='/portfolio/5' className="carousel-link"><h3>Travel</h3></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;
