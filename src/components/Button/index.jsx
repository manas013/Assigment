import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[27px]", square: "rounded-none" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-700",
    gray_900_01: "bg-gray-900_01 text-gray-100",
    amber_300: "bg-amber-300 text-gray-700",
    amber_400: "bg-amber-400 text-gray-700",
    gray_700: "bg-gray-700 text-white-A700",
  },
  gradient: { light_green_A200_light_green_A700: "bg-gradient  text-gray-900" },
};
const sizes = { xs: "p-2.5", sm: "p-[13px]", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_900_01",
    "amber_300",
    "amber_400",
    "gray_700",
    "light_green_A200_light_green_A700",
  ]),
};

export { Button };
