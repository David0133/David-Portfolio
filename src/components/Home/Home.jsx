import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import './home.css';
import undraw from '../../assets/images/undraw_hello_re_3evm.svg';
import About from '../About/About';
const Home = () => {
    

    useEffect(() => {
        const image = document.getElementsByClassName('image')[0].getElementsByTagName('img')[0];
        const introtype = document.getElementsByClassName('intro')[0].getElementsByTagName('div')[0];
        const introhead = document.getElementsByClassName('intro')[0].getElementsByTagName('h1')[0];
        
        // const introtype = document.getElementsByClassName('.intro')[0].getElementsByTagName('div')[0];
        setTimeout(() => {
            image.style.transform = 'translateX(0)'
            introhead.style.transform = 'translateY(0)'
            introtype.style.transform = 'translateY(0)'
        }, 500)

    })
    return (
        <React.Fragment>
        <div className="container home-container text-center w-full h-screen d-flex flex-col justify-center  md:flex-row md:justify-between items-center overflow-hidden ">
            
            <div className="intro w-full sm:w-1/2">
                <h1 className='text-5xl md:text-4xl lg:text-6xl'>I am David</h1>
                <div className="typewriter text-xl">
                    <Typewriter
                        options={{
                            strings: ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="image  ">
                <img src={undraw} height="500px" width="500px" alt="" />
            </div>
        </div>
        {/* <About/> */}
        </React.Fragment>
    );
};

export default Home;