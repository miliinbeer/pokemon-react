import React, { FunctionComponent } from "react";
import { Button } from "./styles";

interface Props {
  onClick: () => void;
  children: string;
}

export const ButtonWidget: FunctionComponent<Props> = ({
  onClick,
  children,
}) => {
  return (
    <Button onClick={onClick} type="button">
      {children}
    </Button>
  );
};
