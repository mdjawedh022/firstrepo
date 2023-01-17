import React from "react";
import { ButtonStyled } from "./Button.styled";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button = ({
  children,
  onClick = () => {},
  size = "sm",
  variant = "primary",
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  return (
    <ButtonStyled
      data-testid="my"
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonStyled>
  );
};

export default Button;
