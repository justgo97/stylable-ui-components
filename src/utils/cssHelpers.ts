// Normalize camelCase CSS properties to kebab-case
const toKebabCase = (prop: string) => {
  return prop.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

// A list of tokens of css props that can use pixel value
const pixelProps =
  /width|height|margin|padding|size|gap|basis|position|radius/i;

// Generate CSS for a single property
const generateCssLine = (key: string, value: any): string => {
  const normalizedValue =
    typeof value === "number" && pixelProps.test(key) ? `${value}px` : value;

  return `${toKebabCase(key)}: ${normalizedValue};\n`;
};

// Convert custom props into standard CSS properties
const resolveCustomProps = (
  key: string,
  customCSSProps: Record<string, string | string[]>
) => {
  const customProp = customCSSProps[key];
  return Array.isArray(customProp) ? customProp : [customProp || key];
};

const validCssProperties = (() => {
  const element = document.createElement("div");
  const styles = Object.keys(element.style);
  return styles;
})();

export { generateCssLine, resolveCustomProps, validCssProperties };
