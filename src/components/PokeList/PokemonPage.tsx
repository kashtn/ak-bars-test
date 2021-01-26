import { ReactElement, useEffect, FC } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { StateType } from "../../redux/reducer";
import { getPokemon } from "../../redux/actions";
import { Button, Spin } from "antd";

type PropsType = {
  children?: never;
};

export const PokemonPage: FC<PropsType> = (props): ReactElement => {
  type ParamsType = {
    name: string;
  };
  const history = useHistory();
  const { name } = useParams<ParamsType>();
  const dispatch = useDispatch();
  const { currentPokemon, loading } = useSelector<AppState, StateType>(
    (state) => state
  );

  useEffect(() => {
    dispatch(getPokemon(name));
  }, []);

  return (
    <>
      <div className="pokemonPageContainer">
        {!loading ? (
          <>
            <div className="titleContainer">
              <h2>{name}</h2>
            </div>
            <div className="imgPageContainer">
              <img
                width="200"
                alt="/"
                src={`https://pokeres.bastionbot.org/images/pokemon/${currentPokemon.id}.png`}
              />
            </div>
            <div className="pageDataContainer">
              <div>
                <ul>
                  <h3>Type:</h3>
                  {currentPokemon.types &&
                    currentPokemon.types.map((slot: any) => (
                      <li key={Math.random()}>{slot.type.name}</li>
                    ))}
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Abilities:</h3>
                  {currentPokemon.abilities &&
                    currentPokemon.abilities.map((ability: any) => (
                      <li key={Math.random()}>
                        <Link to={`/${name}/ability/${ability.ability.name}`}>
                          {ability.ability.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Charachteristics:</h3>
                  {currentPokemon.stats &&
                    currentPokemon.stats.map((slot: any) => (
                      <li key={Math.random()}>
                        {slot.stat.name} : {slot.base_stat}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="spin">
            <Spin />
          </div>
        )}
        <div className="buttonContainer">
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
};
