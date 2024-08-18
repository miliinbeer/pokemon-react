import React, { FunctionComponent } from "react";
import { PokemonTypes } from "../../shared/types/index";
import { Root, Title, Image } from "./styles";

export const CardWidget: FunctionComponent<PokemonTypes> = ({
  name,
  picture,
  moves,
  id,
  height,
  attack,
}) => {
  return (
    <Root>
      <Title>{name}</Title>
      <Image src={picture} alt="img" />
      <div>
        <p>Снялся в {moves} сериях </p>
        <p>Id: {id}</p>
        <p>height: {height}</p>
        <p>attack: {attack}</p>
      </div>
    </Root>
  );
};
