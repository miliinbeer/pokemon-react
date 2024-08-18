import React, { FunctionComponent, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchInfo } from "../../app/api";
import { AppDispatch, StateTypes, DataTypes } from "../../shared/types";
import { ButtonWidget } from "../button-widget";
import { CardWidget } from "../card-widget";
import { Main, Buttons, Info } from "./styles";

export const MainWidget: FunctionComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, selected } = useSelector((state: StateTypes) => state.root);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const fetchPokemons = useCallback(
    (url: string) => {
      dispatch(fetchInfo(url));
    },
    [dispatch]
  );

  const handleButton = useCallback(
    (name: string) => {
      const dataFind = data.find((el: DataTypes) => el.name === name);
      if (dataFind) {
        fetchPokemons(dataFind.url);
      }
    },
    [data]
  );

  return (
    <Main>
      <Buttons>
        {data.map((el: DataTypes, i: number) => (
          <ButtonWidget
            key={i}
            children={el.name}
            onClick={() => handleButton(el.name)}
          />
        ))}
      </Buttons>
      <div>
        <Info>
          {selected && (
            <CardWidget
              name={selected.name}
              picture={selected.picture}
              moves={selected.moves}
              id={selected.id}
              height={selected.height}
              attack={selected.attack}
            />
          )}
        </Info>
      </div>
    </Main>
  );
};
