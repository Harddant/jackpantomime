import PropTypes from "prop-types";

const MenuItem = ({ name, url, handleScroll }) => {
    return (
        <li>
            <button onClick={() => handleScroll(url)}>
                {name}
            </button>
        </li>
    );
};

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleScroll: PropTypes.func.isRequired,
}

export default MenuItem;

