import React from "react";
import { Root } from "./styles";

interface ButtonProps {
  onClick: any;
  children : string
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <>
      <Root onClick={onClick} type="button">
        {children}
      </Root>
    </>
  );
};
