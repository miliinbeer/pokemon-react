import { useCallback, useEffect, useState } from "react";
import { GlobalStyles, Container, Main, Buttons } from "./styles";
import { Header } from "../layout/header";
import { Card } from "../widgets/card";
import { Button } from "../widgets/ui/button";

interface DataTypes {
  name: string;
  url: string;
}
interface PokemonTypes {
  name: string;
  sprites: { front_shiny: string };
  moves: string;
  id: string;
  height: string;
  stats: Array<{ base_stat: number }>;
}

function App() {
  const [data, setData] = useState<Array<DataTypes>>([]);
  const [pokemon, setPokemon] = useState<any>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((el) => setData(el.results));
    return () => {};
  }, []);

  const fetchData = useCallback((url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((el: PokemonTypes) =>
        setPokemon({
          name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
          picture: el.sprites.front_shiny,
          moves: el.moves.length,
          id: el.id,
          height: el.height,
          attack: el.stats[1].base_stat,
        })
      );
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      fetchData(data[0].url);
    }
  }, [data]);

  useEffect(() => {
    let item: any = fetchData(pokemon.url);
    fetch(item);
  }, [pokemon]);

  const handlerBtn = useCallback(
    async (name: string) => {
      setPokemon(data.find((el) => el.name === name));
    },
    [data]
  );

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main>
          <Buttons>
            {data.map((el, i) => (
              <Button
                key={i}
                children={el.name}
                onClick={() => handlerBtn(el.name)}
              />
            ))}
          </Buttons>
          <Card
            name={pokemon.name}
            picture={pokemon.picture}
            alt={pokemon.name}
            moves={pokemon.moves}
            id={pokemon.id}
            height={pokemon.height}
            attack={pokemon.attack}
          />
        </Main>
      </Container>
    </>
  );
}

export default App;
