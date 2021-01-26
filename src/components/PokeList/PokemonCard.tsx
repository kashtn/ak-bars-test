import { FC, ReactElement, useEffect, useState } from "react";
import env from "react-dotenv";

type PropsType = {
  pokeName: string;
};

export const PokemonCard: FC<PropsType> = (props): ReactElement => {
  const [pokeId, setPokeId] = useState<number>();

  useEffect(() => {
    let mounted = true;
    async function getCurrentImage() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`);
      const result = await response.json();
      setPokeId(result.id);
    }
    if (mounted) {
      getCurrentImage();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="imgCardContainer">
        <h3>{props.pokeName}</h3>
        <img
          width="300"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
          alt="/"
        />
      </div>
    </>
  );
};
