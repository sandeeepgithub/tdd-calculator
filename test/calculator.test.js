const calculator = require("../calculator");

describe("Calculator", () => {
  test("should return 0 for an empty value", () => {
    expect(calculator("")).toBe(0);
    expect(calculator()).toBe(0);
    expect(calculator(null)).toBe(0);
  });

  test("should return sum of values provided in string", () => {
    expect(calculator("1")).toBe(1);
    expect(calculator("2,7")).toBe(9);
    expect(calculator("1,3,5,8")).toBe(17);
  });

  test("should return rounded values sum if values contains float numbers", () => {
    expect(calculator("1.0")).toBe(1);
    expect(calculator("2,7.3")).toBe(9);
    expect(calculator("1,3,5.6,8.7")).toBe(19);
  });

  test("should return sum if whitespace is present", () => {
    expect(calculator("2,3,4,5      ")).toBe(14);
  });

  test(`should return sum if numbers contain values with Enter pressed`, () => {
    expect(calculator("1\n2,3\n4\n5")).toBe(15);
  });

  test("should return sum if delimiter is present", () => {
    expect(calculator("//;\n1;2;3;4")).toBe(10);
    expect(calculator("//$\n10$15")).toBe(25);
    expect(calculator("//#\n5#55#10#24")).toBe(94);
  });

  test("should return sum even if delimiter is present at the end", () => {
    expect(calculator("//;\n1;2;3;4;")).toBe(10);
    expect(calculator("//$\n10$15$")).toBe(25);
  });

  test("should throw error if values are negative", () => {
    expect(() => calculator("1,-5")).toThrow("negative numbers not allowed -5");
    expect(() => calculator("1,-9, 14, 56, -23")).toThrow(
      "negative numbers not allowed -9, -23"
    );
  });
});
