const calculator = require("../calculator"); // Adjust the path as needed

describe("Calculator", () => {
  test("should return 0 for an empty value", () => {
    expect(calculator("")).toBe(0);
  });
});
