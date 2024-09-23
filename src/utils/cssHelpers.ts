// Normalize camelCase CSS properties to kebab-case
const toKebabCase = (prop: string) => {
  return prop.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

// A list of tokens of css props that can use pixel value
const pixelProps = /width|height|margin|padding|size|gap|basis|position/i;

// Generate CSS for a single property
const generateCssLine = (key: string, value: any): string => {
  const normalizedValue =
    typeof value === "number" && pixelProps.test(key) ? `${value}px` : value;

  return `${toKebabCase(key)}: ${normalizedValue};\n`;
};

// Convert custom props into standard CSS properties
const resolveCustomProps = (
  key: string,
  value: any,
  customCSSProps: Record<string, string | string[]>
) => {
  const customProp = customCSSProps[key];
  return customProp
    ? Array.isArray(customProp)
      ? customProp.map((prop) => [prop, value])
      : [[customProp, value]]
    : [[key, value]];
};

const validCssProperties = (() => {
  const element = document.createElement("div");
  const styles = Object.keys(element.style);
  return styles;
})();

export { generateCssLine, resolveCustomProps, validCssProperties };
