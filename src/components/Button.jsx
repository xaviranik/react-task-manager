import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:shadow-md focus:outline-none"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
