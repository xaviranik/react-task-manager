import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked!");
  };

  return (
    <div className="h-screen p-8 bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="p-4 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gray-600 to-gray-900">
          {title}
        </h1>
        <Button text="Add" onClick={onClick} />
      </div>
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
