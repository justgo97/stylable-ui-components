import {
  generateCssLine,
  resolveCustomProps,
  validCssProperties,
} from "./cssHelpers";
import { breakpointsProps } from "./breakpointsProps";
import { cssShorthandProps } from "./cssShorthandProps";

// Combine pseudo-prop and breakpoint logic map in one step
const pseudoHandlers: Record<string, (value: any, props?: any) => string> = {
  // Pseudo-props
  _hover: (value) => `&:hover { ${generateStyles(value)} }`,
  _selected: (value, props) =>
    props.isSelected ? `${generateStyles(value)}` : "",
  _custom: (value) => `${value.condition} { ${generateStyles(value.style)} }`,

  // Breakpoints
  ...Object.keys(breakpointsProps).reduce(
    (acc, breakpointKey) => ({
      ...acc,
      [breakpointKey]: (value: Record<string, any>) =>
        `${breakpointsProps[breakpointKey]} { ${generateStyles(value)} }`,
    }),
    {}
  ),
};

const generateStyles = (
  props: Record<string, any>,
  filterValid = false
): string => {
  const pseudoStyles: string[] = [];
  const styles: string[] = [];

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) continue;

    if (pseudoHandlers[key]) {
      pseudoStyles.push(pseudoHandlers[key](value, props));
      continue;
    }

    const resolvedProps = resolveCustomProps(key, value, cssShorthandProps);
    for (const [resolvedKey, resolvedValue] of resolvedProps) {
      if (filterValid && !validCssProperties.includes(resolvedKey)) continue;
      styles.push(generateCssLine(resolvedKey, resolvedValue));
    }
  }

  return `${styles.join("")}${pseudoStyles.join("\n")}`;
};

export { generateStyles };
