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

function createSC(tag: any, defaultStyles?: BaseComponentProps) {
  return styled(tag)<BaseComponentProps>`
    ${defaultStyles && generateStyles(defaultStyles)}
    ${(props) => generateStyles(props, true)}
  `;
}

export { createSC };
