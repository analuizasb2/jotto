import { getLetterMatchCount } from "./index";
describe("getLetterMatchCount", () => {
  test("returns the correct count when there are zero matching letters", () => {
    const result = getLetterMatchCount("mouse", "party");
    expect(result).toBe(0);
  });
  test("returns the correct count when there are three matching letters", () => {
    const result = getLetterMatchCount("train", "party");
    expect(result).toBe(3);
  });
  test("returns the correct count when there are duplicate matching letters", () => {
    const result = getLetterMatchCount("banana", "party");
    expect(result).toBe(1);
  });
});
