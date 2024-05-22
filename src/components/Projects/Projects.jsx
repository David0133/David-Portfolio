import React from 'react';
import ActionAreaCard from '../../Shared/UIElements/ActionCard';

import { faLaptopCode,faListCheck } from '@fortawesome/free-solid-svg-icons';

import Blog from '../../assets/images/projects/Blog.png'
import ToDo from '../../assets/images/projects/ToDo.png'
import StoreDoor from '../../assets/images/projects/StoreDoor.png'
import PortFolio from '../../assets/images/projects/portfolio.png'
import bank from '../../assets/images/projects/bankmanagement.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Projects = () => {
    const projects = ['To-Do','BLOG','StoreDoor','Portfolio','Bank-Management']
    const projectDetail = {
        'To-Do' : {
            'description' : "Django Based To-Do Application. The main purpose behind this application is to help users to keep track of their daily tasks.",
             'image' : ToDo
        },
        'BLOG' : {
            'description' : "This is BLOG Application. Build Using Django.",
             'image' : Blog
        },
        'StoreDoor' : {
            'description' : "This is an Ecommerce website. Build Using Django. Here customer can buy products from different categories.",
             'image' : StoreDoor
        },
        'Portfolio' : {
            'description' : "This is My Portfolio Application. Based on ReactJs Framework.",
             'image' : PortFolio
        },
        'Bank-Management' : {
            'description' : "This is a Console based Bank Management Application. Build Using Python.",
             'image' : bank
        }
    }
    return (
        <div className='px-16 d-flex flex-col '>
            <h1 className='text-3xl py-4 text-center'><FontAwesomeIcon icon={faListCheck}/>{' '} Projects</h1>
            <div className="project-list grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2  gap-4 my-10 ">
            {projects.map(project => <ActionAreaCard key={project} title={project} description={projectDetail[`${project}`]} />)}
            </div>
            

        </div>
    );
};

export default Projects;