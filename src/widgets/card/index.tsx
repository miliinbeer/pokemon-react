import React from "react";
import { Root, Title, Info } from "./styles";

interface CardProps {
  name: string
  picture: any
  alt: string
  moves: number
  id: string
  height: string
  attack: string

}

export const Card = ({ name, picture, alt, moves, id, height, attack}: CardProps) => {
  return (
    <Root>
      <Title>{name}</Title>
      {picture}
      <Info>
        <p>Снялся в {moves} сериях </p>
        <p>Id: {id}</p>
        <p>height: {height}</p>
        <p>attack: {attack}</p>
      </Info>
    </Root>
  );
};
