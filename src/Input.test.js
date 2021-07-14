import Input from "./Input";
import React from "react";
import { checkProps, findByTestAttribute } from "../test/testUtils";
import { shallow } from "enzyme";

const defaultProps = { secretWord: "party" };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

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
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
