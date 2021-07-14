import Input from "./Input";
import { checkProps, findByTestAttribute } from "../test/testUtils";
import { shallow } from "enzyme";

const defaultProps = { secretWord: "party" };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ secretWord: true });
  const componentInput = findByTestAttribute(wrapper, "component-input");
  expect(componentInput.length).toBe(1);
});

test("does not throw warning when prop types are correct", () => {
  const props = { secretWord: "true" };
  checkProps(Input, props);
});
