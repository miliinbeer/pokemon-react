import { store } from "../../app/store";

export type AppDispatch = typeof store.dispatch;

export interface DataTypes {
  name: string;
  url: string;
}
export interface PokemonTypes {
  name: string;
  picture: string;
  moves: number;
  id: string;
  height: string;
  attack: string;
}

export interface StateTypes {
  root: {
    data: DataTypes[];
    selected: PokemonTypes;
    loading: boolean;
    error: null;
  };
}

export interface InfoTypes {
  data: DataTypes[];
  selected: PokemonTypes | null;
  loading: boolean;
  error: null | undefined | string;
}

export interface ButtonProps {
  onClick: () => void;
  children: string;
}
