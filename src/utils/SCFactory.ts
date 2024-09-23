import { ComponentType } from "react";
import { BaseComponentProps } from "./styleTypes";
import { createComponent } from "./createComponent";

// Cache for storing created components
const cache = new Map<string, any>();

// Extend the proxy type to include intrinsic element names and custom components
type StyledProxy = {
  [Tag in keyof React.JSX.IntrinsicElements]: ComponentType<
    React.ComponentProps<Tag> & BaseComponentProps
  >;
};

// Create a proxy for dynamic styled components
const SCFactory = new Proxy(createComponent as unknown as StyledProxy, {
  get(_, tag: keyof React.JSX.IntrinsicElements) {
    if (cache.has(tag)) {
      return cache.get(tag);
    }

    const styledComponent = createComponent(tag);

    cache.set(tag, styledComponent);

    return styledComponent;
  },
});

export { SCFactory };
