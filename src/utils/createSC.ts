import styled, { StyledComponent } from "@emotion/styled";
import { ComponentType } from "react";
import { BaseComponentProps } from "./styleTypes";
import { generateStyles } from "./generateStyles";
import { PropsOf, Theme } from "@emotion/react";

// Overload for intrinsic elements
function createSC<Tag extends keyof React.JSX.IntrinsicElements>(
  tag: Tag,
  defaultStyles?: BaseComponentProps
): StyledComponent<
  BaseComponentProps & { theme?: Theme; as?: React.ElementType },
  React.JSX.IntrinsicElements[Tag],
  Theme
>;

// Overload for custom React components
function createSC<C extends ComponentType<any>>(
  tag: C,
  defaultStyles?: BaseComponentProps
): StyledComponent<
  BaseComponentProps & { theme?: Theme } & PropsOf<C>,
  {},
  Theme
>;

/**
 * Creates a styled component using an intrinsic HTML element or a custom React component.
 * It supports default styles and dynamically applies styles passed via props.
 *
 * @template Tag - The intrinsic HTML element to style, e.g., 'div', 'span', etc.
 * @template C - The custom React component to style.
 *
 * @param {Tag | C} tag - The intrinsic HTML element or custom React component to style.
 * @param {BaseComponentProps} [defaultStyles] - Optional default styles to apply to the component.
 * @returns {StyledComponent<React.ComponentProps<Tag | C> & BaseComponentProps, any, Theme>} - A styled React component.
 */
function createSC(tag: any, defaultStyles?: BaseComponentProps) {
  return styled(tag)<BaseComponentProps>`
    ${defaultStyles && generateStyles(defaultStyles)}
    ${(props) => generateStyles(props, true)}
  `;
}

export { createSC };
