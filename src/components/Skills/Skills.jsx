import React from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './skill.css';
const Skills = () => {
    return (
        <div className=' min-h-screen d-flex flex-col items-center max-w-screen overflow-hidden'>
            <h1 className='text-3xl my-4'><FontAwesomeIcon icon={faLaptopCode}/> {' '}Skills</h1>
            <div className="skills grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-4 my-10">

                <div className="skill"><i className="ci ci-java ci-3x"></i>JAVA</div>
                <div className="skill"><i className="ci ci-python ci-3x"></i>PYTHON</div>
                <div className="skill"><i className="ci ci-html ci-3x"></i>HTML</div>
                <div className="skill"><i className="ci ci-css ci-3x"></i>CSS</div>
                <div className="skill"><i className="ci ci-tailwind ci-3x"></i>TAILWIND</div>
                <div className="skill"><i className="ci ci-js ci-3x"></i>Javascript</div>
                <div className="skill"><i className="ci ci-react ci-3x"></i>React</div>
                <div className="skill"><i className="ci ci-django ci-3x"></i>DJANGO</div>
                <div className="skill"><i className="ci ci-node ci-3x"></i>Node</div>
                <div className="skill"><i className="ci ci-expressjs ci-3x"></i>Express</div>
                <div className="skill"><i className="ci ci-postgresql ci-3x"></i>PostgreSQL</div>
                <div className="skill"><i className="ci ci-mongodb2-horizontal ci-3x"></i>MongoDB</div>
                <div className="skill"><i className="ci ci-github-light ci-3x"></i>GitHub</div>
            </div>
        </div>
    );
};

export default Skills;