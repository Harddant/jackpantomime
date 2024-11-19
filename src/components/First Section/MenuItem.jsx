
const MenuItem = ({ name, url, handleScroll }) => {
    return (
        <li>
            <button onClick={() => handleScroll(url)}>
                {name}
            </button>
        </li>
    );
};

export default MenuItem;

