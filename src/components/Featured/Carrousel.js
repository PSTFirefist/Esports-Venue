import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/surefour_one.jpg';
import slide_two from '../../resources/images/sinatraa_one.jpg';
import slide_three from '../../resources/images/birdring_one.jpg';
import slide_four from '../../resources/images/lan_one.jpg';
import slide_five from '../../resources/images/mayhem_one.jpg';
import slide_six from '../../resources/images/jake_one.jpg';
import slide_seven from '../../resources/images/lan_two.jpg';
import slide_eight from '../../resources/images/jjonak_one.jpg';


const Carrousel = () => {
    
    const settings ={
        dots: false,
        infinate:true,
        autoplay:true,
        speed: 500
    }
    
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
         }}

        >

            <Slider {...settings}>
             <div>
                 <div className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
                
            </div>
                
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
            
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_four})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_five})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_six})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_seven})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
            <div>
            <div className="carrousel_image"
                        style={{
                            background:`url(${slide_eight})`,
                            height:`${window.innerHeight}px`
                        }}
                > 
                </div>
            </div>
           
            </Slider>

        </div>
    )
}

export default Carrousel;