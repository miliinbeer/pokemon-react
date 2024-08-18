import React, { FunctionComponent } from "react";
import { Root, Title, Info } from "./styles";
import pointer from "../../shared/ui/icons/pointer";

export const HeaderWidget: FunctionComponent = () => {
  return (
    <Root>
      <Title>Покемоны API</Title>
      <Info>
        <div>{pointer}</div>
        <p>Нажмите на нужного Покемона</p>
      </Info>
    </Root>
  );
};
