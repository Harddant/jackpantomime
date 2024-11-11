import React from 'react';
import Portrait2 from '../assets/Portrait2.jpg';


const AboutMe = ({title}) => {
    return (
        <div id='about' className="flex flex-col items-center">
            <h2 className="mt-8 text-5xl font-Oswald">{title}</h2>
            <img src={Portrait2} alt="Portrait2" className="w-64 h-64 object-cover rounded-full mt-10"/>
        </div>


    );
};

export default AboutMe