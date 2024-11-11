import React, { useState } from 'react';
import MenuItem from './MenuItem';

const MenuBtn = () => {
    const handleScroll = (url) => {
        const nextSection = document.querySelector('#' + url);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [menuLinks, setMenuLinks] = useState([
        { url: 'about', name: 'About' },
        { url: 'jacks-music', name: 'Jacks Music' },
        { url: 'merch', name: 'Merch' },
        { url: 'tour', name: 'Tour' },
    ]);

    return (
        <div>
            <ul className="flex flex-col gap-4 menu-btn font-Oswald">
                {menuLinks.map((link, index) => (
                    <MenuItem key={index} name={link.name} url={link.url} handleScroll={handleScroll} />
                ))}
            </ul>
        </div>
    );
};

export default MenuBtn;