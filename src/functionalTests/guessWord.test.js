import React from "react";
import { mount } from "enzyme";

import App from "../App";
import { findByTestAttribute } from "../../test/testUtils";

const setup = (state = {}) => {
  //TODO apply state
  const wrapper = mount(<App />);

  const inputBox = findByTestAttribute(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  const submitButton = findByTestAttribute(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

const submitCorrectGuess = (wrapper, secretWord) => {
  const inputBox = findByTestAttribute(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: { secretWord } } });

  const submitButton = findByTestAttribute(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });
};

describe.skip("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("creates guessedWords table with one row", () => {
    const guessedWordRows = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe.skip("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "table", letterMatchCount: 1 },
      ],
    });
  });
  test("creates guessedWords table with three rows", () => {
    const guessedWordRows = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(3);
  });
});

describe.skip("guess secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
    submitCorrectGuess(wrapper, "party");
  });

  test("See Congrats message", () => {
    const congratsMessage = findByTestAttribute(wrapper, "congrats-message");
    expect(congratsMessage.text().length).not.toBe(0);
  });

  test("Does not see input box", () => {
    const inputBox = findByTestAttribute(wrapper, "input-box");
    expect(inputBox.exists).toBe(false);
    const submitButton = findByTestAttribute(wrapper, "submit-button");
    expect(submitButton.exists).toBe(false);
  });
});

describe("invalid word guessed", () => {
  test.todo("guessedWords table does not get another row");
});
