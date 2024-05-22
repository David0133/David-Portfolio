import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faHouse, faProjectDiagram, faAddressCard, faEnvelope,faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Menu = (props) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (item) => {
        setHoveredItem(item);
      };
    
      const handleMouseLeave = () => {
        setHoveredItem(null);
      };
    return (
        <div className="menu">
        <ul className={props.class}>
          <li
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredItem === 'home' || hoveredItem === null ? 1 : 0.5, transition: 'opacity 0.3s ease-in-out' }}
            className='d-flex items-center gap-4  text-2xl font-medium'
          >
            {props.icons && <FontAwesomeIcon icon={faHouse} />}

            <NavLink to="/" className="home">Home</NavLink>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredItem === 'about' || hoveredItem === null ? 1 : 0.5, transition: 'opacity 0.3s ease-in-out' }} 
            className='d-flex items-center gap-4  text-2xl font-medium'
          >
            {props.icons && <FontAwesomeIcon icon={faAddressCard} />}
            <NavLink to="about" className="about">About</NavLink>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('skills')}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredItem === 'skills' || hoveredItem === null ? 1 : 0.5, transition: 'opacity 0.3s ease-in-out' }} 
            className='d-flex items-center gap-4  text-2xl font-medium'
          >
            {props.icons && <FontAwesomeIcon icon={faLaptopCode} />}
            <NavLink to="skills" className="skills">Skills</NavLink>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('projects')}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredItem === 'projects' || hoveredItem === null ? 1 : 0.5, transition: 'opacity 0.3s ease-in-out' }} 
             className='d-flex items-center gap-4  text-2xl font-medium'
          >
            {props.icons && <FontAwesomeIcon icon={faProjectDiagram} />}
            <NavLink to="projects" className="project">Projects</NavLink>
          </li>
          
          <li
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
            style={{ opacity: hoveredItem === 'contact' || hoveredItem === null ? 1 : 0.5, transition: 'opacity 0.3s ease-in-out' }} 
            className='d-flex items-center gap-4  text-2xl font-medium'
          >
            {props.icons && <FontAwesomeIcon icon={faEnvelope} />}
            <NavLink to="contact" className="contact">Contact</NavLink>
          </li>
        </ul>

      </div>
    );
};

export default Menu;