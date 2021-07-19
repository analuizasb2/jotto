import App from "./App";
import { findByTestAttribute, storeFactory } from "../test/testUtils";
import { mount } from "enzyme";
import { getSecretWord as mockGetSecretWord } from "./actions";
import { Provider } from "react-redux/lib/alternate-renderers";

jest.mock("./actions");

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
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
