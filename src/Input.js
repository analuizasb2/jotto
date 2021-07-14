import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter guess"
          onChange={handleInputChange}
        />
      </form>
      <button data-test="submit-button" className="btn btn-primary mb-2">
        Submit
      </button>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };

export default Input;
