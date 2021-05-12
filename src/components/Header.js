import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1 style={headerStyle}>Task Manager {title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

const headerStyle = { color: "Red" };

export default Header;
