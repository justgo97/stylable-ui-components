const cssShorthandProps: { [key: string]: string | string[] } = {
  w: "width",
  h: "height",
  minW: "minWidth",
  maxW: "maxWidth",
  minH: "minHeight",
  maxH: "maxHeight",

  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pe: "paddingInlineEnd",
  pb: "paddingBottom",
  pl: "paddingLeft",
  ps: "paddingInlineStart",
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],

  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  me: "marginInlineEnd",
  mb: "marginBottom",
  ml: "marginLeft",
  ms: "marginInlineStart",
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],

  bg: "background",
  bgColor: "backgroundColor",
  bgClip: "backgroundClip",
  bgImage: "backgroundImage",
  bgSize: "backgroundSize",
  bgPosition: "backgroundPosition",
  bgRepeat: "backgroundRepeat",
  bgAttachment: "backgroundAttachment",

  flexDir: "flexDirection",
};

export { cssShorthandProps };
