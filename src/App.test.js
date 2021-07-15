import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttribute } from "../test/testUtils";

const setup = () => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttribute(wrapper, "component-app");
  expect(app).toHaveLength(1);
});
