import { BaseComponentProps } from "./styleTypes";
import { createSC } from "./createSC";
import { StyledComponent } from "@emotion/styled";
import { Theme } from "@emotion/react";

// Cache for storing created components
const cache = new Map<string, any>();

// Extend the proxy type to include intrinsic element names
type StyledProxy = {
  [Tag in keyof React.JSX.IntrinsicElements]: StyledComponent<
    { theme?: Theme; as?: React.ElementType } & BaseComponentProps,
    React.ComponentProps<Tag>
  >;
};

// Create a proxy for dynamic styled components
const SCFactory = new Proxy(createSC as unknown as StyledProxy, {
  get(_, tag: keyof React.JSX.IntrinsicElements) {
    if (cache.has(tag)) {
      return cache.get(tag);
    }

    const styledComponent = createSC(tag);

    cache.set(tag, styledComponent);

    return styledComponent;
  },
});

export { SCFactory };
