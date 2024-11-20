import React from 'react';
import AboutPicture from '../../assets/AboutPicture.jpg';
import ScrollBtn from "../ScrollBtn.jsx";


const AboutMe = ({title}) => {


    return (
        <>
            <div id='about' className="flex flex-col items-center">
                <h2 className="mt-8 text-4xl font-Oswald">{title}</h2>
            </div>
            <div className="flex items-center justify-center text-center mt-10 ml-4 mr-4">
                <p className="text-2xl font-Oswald">
                    Jack Pantomime is up-and-coming artist from
                    the Netherlands.
                </p>
            </div>
            <div className="flex items-center justify-center text-center">
                <img src={AboutPicture} alt="Portrait" className="w-96 h-72 object-cover mt-10"/>
            </div>
            <div className="flex items-center justify-center text-center">
                <p className="text-2xl font-Oswald mt-10 ml-4 mr-4">
                    Capturing the beloved by many (Indie) Rock sound while giving his own twist to it.
                </p>
            </div>
            <div className="flex items-center justify-center text-center">
                <p className="text-2xl font-Oswald mt-10 ml-4 mr-4">
                    Jack is an indie solo artist crafting soulful melodies, blending heartfelt lyrics with raw passion.
                </p>
            </div>
        </>
    );
};

export default AboutMe