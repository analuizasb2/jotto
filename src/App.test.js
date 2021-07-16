import App from "./App";
import { findByTestAttribute } from "../test/testUtils";
import { mount } from "enzyme";
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

const setup = () => {
  return mount(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const app = findByTestAttribute(wrapper, "component-app");
  expect(app).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord runs on app mount", () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("does not run getSecretWord on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps({});

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
