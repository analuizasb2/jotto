import moxios from "moxios";
import { getSecretWord } from "./index";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secret word is returned", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    // TODO - update to test app in Redux/ context sections
    const secretWord = await getSecretWord();
    expect(secretWord).toBe("party");
  });
});
