import React from 'react'

export const ScrollBtn = () => {

    const handleScroll = () => {
    const nextSection = document.querySelector('.snap-start:nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='object-bottom mt-48'>
        <button 
          onClick={handleScroll}
          className='scroll-down'
        />
    </section>
  )
}

export default ScrollBtn