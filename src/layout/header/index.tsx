import React from "react";
import { Root, Title, Info, Text } from "./styles";
import pointer from "../../shared/icons/pointer";

export const Header = () => {
  return (
    <Root>
      <Title>Покемоны API</Title>
      <Info>
        <div>{pointer}</div>
        <Text>Нажмите на нужного Покемона</Text>
      </Info>
    </Root>
  );
};
