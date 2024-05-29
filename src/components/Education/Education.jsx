import React from 'react';

import {faUserGraduate,faBookOpen} from '@fortawesome/free-solid-svg-icons'

import sirt from '../../assets/images/sirt.jpg'
import sati from '../../assets/images/sati-logo.jpg'
import school from '../../assets/images/school.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Education = () => {
    const education = [
        {
            id: 1,
            title: "Bachelor of technology in Computer Science",
            institution: `Sagar Institute of Research and Technology ( SIRT )`,
            University : "RGPV",
            location : "Bhopal",
            passout : 2023,
            image :sirt
        },
        {
            id: 2,
            title: "Diploma in Computer Science",
            institution: "Samrat Ashok Technological Institute ( SATI )",
            University : "RGPV",
            location : "Vidisha",
            passout : 2019,
            image :sati
        },
        {
            id: 3,
            title: "Higher Secondary",
            institution: "Mother Convent Co-Ed school",
            University : "M.P Board",
            location : "Bhopal",
            passout : 2016,
            image : school
        }

    ]
    return (
        <div className='container'>
            <div className="edu-details mt-10">
                <h1 className='text-3xl text-center my-4 font-bold'><FontAwesomeIcon icon={faBookOpen} />{" "}Education</h1>
                {education.map(edu => (
                    <div key={edu.id} className="card d-flex flex-col sm:flex-row gap-2 mb-4 p-2 border border-gray-300 rounded shadow bg-gray-800 ">
                        <img src={edu.image} alt="img"  className='rounded object-cover' style={{height: '100px', width: '100px'}} />
                        <div className="content">
                        <h3 className='text-3xl'>{edu.title} {edu.id==1?<FontAwesomeIcon icon={faUserGraduate} />:""}</h3>
                        <p>{edu.institution}</p>
                        <p>{edu.University}, {edu.location}</p>
                        <p>Passout {edu.passout}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;