import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1>Task Manager {title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
