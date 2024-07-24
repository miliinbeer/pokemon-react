import { useCallback, useEffect, useState } from "react";
import { GlobalStyles, Container, Main, Buttons, Info, Image } from "./styles";
import { Header } from "../layout/header";
import { Card } from "../widgets/card";
import { Button } from "../widgets/ui/button";
import { Loader } from "../widgets/loader";

// TODO : Спросить правильная ли типизация у компонента Card

interface DataTypes {
  name: string;
  url: string;
}
interface PokemonTypes {
  name: string;
  picture: string;
  moves: number;
  id: string;
  height: string;
  attack: string;
}

function App() {
  const [data, setData] = useState<Array<DataTypes>>([]);
  const [pokemon, setPokemon] = useState<PokemonTypes>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((el) => {
        setData(el.results);
      });
    return () => {};
  }, []);

  const fetchData = useCallback((url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((el) => {
        setPokemon({
          name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
          picture: el.sprites.front_shiny,
          moves: el.moves.length,
          id: el.id,
          height: el.height,
          attack: el.stats[1].base_stat,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      fetchData(data[0].url);
    }
  }, [data]);

  const handlerBtn = useCallback(
    async (name: string) => {
      const dataFind = data.find((el) => el.name === name);
      if (dataFind) {
        setLoading(true);
        fetchData(dataFind.url);
      }
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
          <div>
            <Info>
              {pokemon ? (
                <Card
                  name={pokemon.name}
                  picture={
                    loading ? (
                      <Loader />
                    ) : (
                      <Image src={pokemon.picture} alt={pokemon.name} />
                    )
                  }
                  alt={pokemon.name}
                  moves={pokemon.moves}
                  id={pokemon.id}
                  height={pokemon.height}
                  attack={pokemon.attack}
                />
              ) : null}
            </Info>
          </div>
        </Main>
      </Container>
    </>
  );
}

export default App;
