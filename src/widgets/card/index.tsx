import React from "react";
import { Root, Title, Image, Info } from "./styles";

interface CardProps {
  name: string
  picture: string
  alt: string
  moves: string
  id: string
  height: string
  attack: string
}

export const Card = ({ name, picture, alt, moves, id, height, attack }: CardProps) => {
  return (
    <Root>
      <Title>{name}</Title>
      <Image src={picture} alt={alt} />
      <Info>
        <p>Снялся в {moves} сериях </p>
        <p>Id: {id}</p>
        <p>height: {height}</p>
        <p>attack: {attack}</p>
      </Info>
    </Root>
  );
};
