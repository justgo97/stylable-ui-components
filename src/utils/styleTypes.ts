import { CSSProperties } from "react";

interface LayoutProps {
  w?: CSSProperties["width"];
  h?: CSSProperties["height"];
  minW?: CSSProperties["minWidth"];
  maxW?: CSSProperties["maxWidth"];
  minH?: CSSProperties["minHeight"];
  maxH?: CSSProperties["maxHeight"];
}

interface PaddingProps {
  p?: CSSProperties["padding"];
  pt?: CSSProperties["paddingTop"];
  pr?: CSSProperties["paddingRight"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
  px?: CSSProperties["padding"];
  py?: CSSProperties["padding"];
}

interface MarginProps {
  m?: CSSProperties["margin"];
  mt?: CSSProperties["marginTop"];
  mr?: CSSProperties["marginRight"];
  mb?: CSSProperties["marginBottom"];
  ml?: CSSProperties["marginLeft"];
  mx?: CSSProperties["margin"];
  my?: CSSProperties["margin"];
}

interface BackgroundProps {
  bg?: CSSProperties["background"];
  bgColor?: CSSProperties["backgroundColor"];
  bgClip?: CSSProperties["backgroundClip"];
  bgImage?: CSSProperties["backgroundImage"];
  bgSize?: CSSProperties["backgroundSize"];
  bgPosition?: CSSProperties["backgroundPosition"];
  bgRepeat?: CSSProperties["backgroundRepeat"];
  bgAttachment?: CSSProperties["backgroundAttachment"];
}

interface FlexboxProps {
  flexDir?: CSSProperties["flexDirection"];
}

type AllCssProps = CSSProperties &
  LayoutProps &
  PaddingProps &
  MarginProps &
  BackgroundProps &
  FlexboxProps;

type SCProps = AllCssProps & PseudoProps & BreakpointsProps;

interface PseudoProps {
  _hover?: SCProps;
  _selected?: SCProps;
  _custom?: { condition: string; style: SCProps };
}

interface BreakpointsProps {
  _xs?: SCProps;
  _sm?: SCProps;
  _md?: SCProps;
  _lg?: SCProps;
  _xl?: SCProps;
  _xxl?: SCProps;
}

interface BaseComponentProps extends SCProps {}

export type { BaseComponentProps };
