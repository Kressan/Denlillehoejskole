import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img_1 from './lange-kurser.png';


class Imgslide extends Component {
    render() {
        return (
            <Carousel showThumbs={false} showStatus={false}>
                <div>
                    <img src={img_1} />
                </div>
                <div>
                    <img src={img_1} />
                </div>
                <div>
                    <img src={img_1} />
                </div>
                <div>
                    <img src={img_1} />
                </div>
            </Carousel>
        );
    }
}

export default Imgslide;