const breakpointsProps: { [key: string]: string } = {
  _xs: "@media (max-width: 575px)", // Extra small devices (phones)
  _sm: "@media (min-width: 576px) and (max-width: 767px)", // Small devices (tablets)
  _md: "@media (min-width: 768px) and (max-width: 991px)", // Medium devices (landscape tablets, small laptops)
  _lg: "@media (min-width: 992px) and (max-width: 1199px)", // Large devices (laptops, desktops)
  _xl: "@media (min-width: 1200px) and (max-width: 1599px)", // Extra large devices (large desktops)
  _xxl: "@media (min-width: 1600px)", // Extra extra large devices (widescreens)
};

export { breakpointsProps };
