import Input from "./Input";
import { findByTestAttribute } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = () => {
  return shallow(<Input />);
};

test("renders without error", () => {
  const wrapper = setup();
  const componentInput = findByTestAttribute(wrapper, "component-input");
  expect(componentInput.length).toBe(1);
});
