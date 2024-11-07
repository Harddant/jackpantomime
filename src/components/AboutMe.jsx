import React from 'react';
import Portrait2 from '../assets/Portrait2.jpg';
import ScrollBtn from "./ScrollBtn.jsx";

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mt-8 text-5xl font-Oswald">About Jack Pantomime</h2>
            <img src={Portrait2} alt="Portrait2" className="w-64 h-64 object-cover rounded-full mt-10"/>
            <button>

            </button>
        </div>


    );
};

export default AboutMe