import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InfoTypes } from "../../shared/types";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  ).then((response) => response.json());
});

export const fetchInfo = createAsyncThunk(
  "pokemon/fetchInfo",
  async (url: string) => {
    const response = await fetch(url);
    return response.json();
  }
);

export const rootReducer = createSlice({
  name: "data",
  initialState: {
    data: [],
    first: [],
    selected: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedPokemon(state, action) {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
      })
      .addCase(fetchData.rejected, (state: InfoTypes, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInfo.fulfilled, (state: InfoTypes, action) => {
        state.loading = false;
        state.selected = {
          name:
            action.payload.name.charAt(0).toUpperCase() +
            action.payload.name.slice(1),
          picture: action.payload.sprites.front_shiny,
          moves: action.payload.moves.length,
          id: action.payload.id,
          height: action.payload.height,
          attack: action.payload.stats[1].base_stat,
        };
      })
      .addCase(fetchInfo.rejected, (state: InfoTypes, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
}).reducer
