import PropTypes from "prop-types";

const ScrollBtn = ({ index }) => {

    const handleScroll = () => {
    const nextSection = document.querySelector(`.snap-start:nth-child(${index})`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <div className='relative bottom-[1vh]'>
            <button
              onClick={handleScroll}
              className='scroll-down'
            />
        </div>
  )
}

ScrollBtn.propTypes = {
    index: PropTypes.number.isRequired,
}

export default ScrollBtn