import styled from "@emotion/styled";
import { ComponentType } from "react";
import { BaseComponentProps } from "./styleTypes";
import { generateStyles } from "./generateStyles";

// Overload for intrinsic elements
function createSC<Tag extends keyof React.JSX.IntrinsicElements>(
  tag: Tag,
  defaultStyles?: BaseComponentProps
): ComponentType<React.ComponentProps<Tag> & BaseComponentProps>;

// Overload for custom React components
function createSC<C extends ComponentType<any>>(
  tag: C,
  defaultStyles?: BaseComponentProps
): ComponentType<React.ComponentProps<C> & BaseComponentProps>;

/**
 * Creates a styled component using an intrinsic HTML element or a custom React component.
 * It supports default styles and dynamically applies styles passed via props.
 *
 * @template Tag - The intrinsic HTML element to style, e.g., 'div', 'span', etc.
 * @template C - The custom React component to style.
 *
 * @param {Tag | C} tag - The intrinsic HTML element or custom React component to style.
 * @param {BaseComponentProps} [defaultStyles] - Optional default styles to apply to the component.
 * @returns {ComponentType<React.ComponentProps<Tag | C> & BaseComponentProps>} - A styled React component.
 */
function createSC(tag: any, defaultStyles?: BaseComponentProps) {
  return styled(tag)<BaseComponentProps>`
    ${defaultStyles && generateStyles(defaultStyles)}
    ${(props) => generateStyles(props, true)}
  `;
}

export { createSC };
