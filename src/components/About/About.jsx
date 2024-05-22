import React, { useEffect } from 'react';
import './about.css'

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

import about_pic from '../../assets/images/Programming-bro.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
     
    useEffect(() => {
        const image = document.getElementsByClassName('about-img')[0].getElementsByTagName('img')[0];
        const about = document.getElementsByClassName('about-info')[0].getElementsByTagName('h1')[0];
        const name = document.getElementsByClassName('about-info')[0].getElementsByTagName('h2')[0];
        const tag = document.getElementsByClassName('about-info')[0].getElementsByTagName('p')[0];
        const content = document.getElementsByClassName('about-info')[0].getElementsByTagName('p')[1];
        const socail = document.getElementsByClassName('social')[0];
        setTimeout(() => {
            image.style.transform = 'translateX(0)';
            about.style.transform = 'translateY(0)';
            
        }, 500);
        setTimeout(() => {
            name.style.transform = 'translateX(0)';
            tag.style.transform = 'translateX(0)';
            
        }, 800)
        setTimeout(() => {
            content.style.transform = 'translateY(0)';
            socail.style.opacity = '1';
        }, 1500)
    }, [])

    return (
        <div className='about-container px-16 d-flex flex-col justify-around sm:d-flex md:flex-row items-center h-screen  '>

            <div className="about-img w-full md:w-1/2 ">
                <img src={about_pic} alt="" className=' ' />
            </div>

            <div className="about-info d-flex flex-col items-center flex-wrap md:w-1/3 md:w-1/2 md:px-0 w-screen px-16 ">
                <h1 className='text-3xl font-bold'> <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-600" />{' '} About Me</h1>
                <div className="content mt-4 text-start px-2">
                    <h2 className='text-2xl font-medium'>Hey I am David</h2>
                    <p className='text-sm my-0.5'>Full Stack Developer</p>
                    <p className='text-justify text-sm mt-3'>I am a Full Stack Developer. I am an Computer Science undergraduate from SIRT Bhopal. I am a passionate Programmer. Creating new things is my passion.</p>
                </div>
                <div className="social d-flex items-center gap-2 mt-4">
                    <a href="https://github.com/David0133"><FontAwesomeIcon icon={faGithub} className="text-2xl" /></a>
                    <a href="https://www.linkedin.com/in/david-charles-9a3b51241"><FontAwesomeIcon icon={faLinkedin} className="text-2xl" /></a>
                    <a href="https://whatsapp.com/channel/0029VaZNaiaEVccITgRzz10H"><FontAwesomeIcon icon={faWhatsapp} className="text-2xl" /></a>
                    <a href="mailto:davidcharles115@gmail.com"><FontAwesomeIcon icon={faGoogle} className="text-2xl" /></a>
                </div>
            </div>
        </div>
    );
};

export default About;