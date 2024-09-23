import { generateStyles } from "../src/utils/generateStyles";
import { BaseComponentProps } from "../src/utils/styleTypes";

test("returns true", () => {
  const dummyComponent: BaseComponentProps = { bgColor: "red" };

  const result = generateStyles(dummyComponent);

  expect(result).toBe(`background-color: red;\n`);
});

test("returns true", () => {
  const dummyComponent: BaseComponentProps = { _hover: { bgColor: "red" } };

  const result = generateStyles(dummyComponent);

  expect(result).toBe(`&:hover { background-color: red;\n }`);
});
