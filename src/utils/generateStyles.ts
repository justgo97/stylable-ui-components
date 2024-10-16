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
  _selected: (value) =>
    `&:is([aria-selected=true], [data-selected]) { ${generateStyles(value)} }`,
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

    if (key in pseudoHandlers) {
      pseudoStyles.push(pseudoHandlers[key]!(value, props));
    } else {
      const resolvedProps = resolveCustomProps(key, cssShorthandProps);
      for (const resolvedKey of resolvedProps) {
        if (!filterValid || validCssProperties.includes(resolvedKey)) {
          styles.push(generateCssLine(resolvedKey, value));
        }
      }
    }
  }

  return `${styles.join("")}${pseudoStyles.join("\n")}`;
};

export { generateStyles };
