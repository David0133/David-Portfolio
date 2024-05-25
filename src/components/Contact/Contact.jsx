import React from 'react';
import contact from '../../assets/images/undraw_profile_re_4a55.svg';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contact = () => {
    const rotate = () => {
        const chek = document.getElementsByClassName('btn')[0].getElementsByTagName('FontAwesomeIcon')[0]
        console.log(chek);
    }

    return (
        <div className='contact min-h-screen relative'>
            <div className="content d-flex flex-col justify-center bg-white text-black h-screen">
                <img src={contact} alt="" className=' h-[100%] absolute right-0 opacity-30' />
                <div className='d-flex flex-col md:items-center z-10 px-10'>
                    <h5 className='text-3xl font-bold'>Get in touch</h5>
                    <h1 className='text-2xl font-bold'>Let's work together</h1>
                    <p className='text-lg'>Feel free to contact me any time. I will be happy to help.</p>
                    <button className='btn rounded bg-blue-600 py-2 md:w-1/3 ' onMouseOver={rotate}><a href="mailto:davidcharles115@gmail.com"><FontAwesomeIcon icon={faGoogle} />{' '}Contact me</a></button>
                </div>
            </div>
        </div>
    );
};

export default Contact;