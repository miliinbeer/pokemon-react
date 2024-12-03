import React, { FC, ReactElement } from "react";
import { Root } from "./styles";

interface Props {
  children: ReactElement
}

export const Container: FC<Props> = ({children}) => {
  return <Root>{children}</Root>;
};
