import React, { FunctionComponent, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchInfo } from "../../app/api";
import { AppDispatch, StateTypes, DataTypes } from "../../shared/types";
import { ButtonWidget } from "../button-widget";
import { Main, Buttons, Info } from "./styles";

export const MainWidget: FunctionComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: StateTypes) => state.root);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Main>
      <Buttons>
        {data.map((el: DataTypes, i: number) => (
          <ButtonWidget key={i} children={el.name} onClick={() => {}} />
        ))}
      </Buttons>
      <div>
        <Info></Info>
      </div>
    </Main>
  );
};
