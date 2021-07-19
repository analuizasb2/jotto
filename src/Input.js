import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const success = useSelector((state) => state.success);

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO - update guessed words global state
    //TODO - check against secretWord to update success global state
    setCurrentGuess("");
  };

  if (success) {
    return <div data-test="component-input" />;
  }
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
      <button
        data-test="submit-button"
        className="btn btn-primary mb-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

Input.propTypes = { secretWord: PropTypes.string.isRequired };

export default Input;
