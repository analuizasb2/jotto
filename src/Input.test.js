import Input from "./Input";
import React, { useState } from "react";
import { checkProps, findByTestAttribute } from "../test/testUtils";
import { shallow } from "enzyme";

const defaultProps = { secretWord: "party", success: false };
const mockSetCurrentGuess = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe("renders", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: true });
  });
  describe("success is true", () => {
    test("Input renders without error", () => {
      const wrapper = setup();
      const componentInput = findByTestAttribute(wrapper, "component-input");
      expect(componentInput.length).toBe(1);
    });

    test("input box is not shown", () => {
      const inputBox = findByTestAttribute(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("submit button is not shown", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("Input renders without error", () => {
      const wrapper = setup();
      const componentInput = findByTestAttribute(wrapper, "component-input");
      expect(componentInput.length).toBe(1);
    });

    test("input box is shown", () => {
      const inputBox = findByTestAttribute(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("submit button is shown", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("renders without error", () => {
  const wrapper = setup();
  const componentInput = findByTestAttribute(wrapper, "component-input");
  expect(componentInput.length).toBe(1);
});

test("does not throw warning when prop types are correct", () => {
  const props = { secretWord: "true" };
  checkProps(Input, props);
});

describe("state controlled input field", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttribute(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("sets currentGuess to empty string after submitting", () => {
    const submitButton = findByTestAttribute(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
