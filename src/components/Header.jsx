import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-900">
          {title}
        </h1>
        <Button text="Add" onClick={onAdd} />
      </div>
    </>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
