import { List, Spin } from "antd";
import "antd/dist/antd.css";
import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanCurrentPokemon, getPokes } from "../../redux/actions";
import { StateType } from "../../redux/reducer";
import { AppState } from "../../redux/store";
import "./PokeList.scss";
import { PokemonCard } from "./PokemonCard";

type PropsType = {
  children?: never;
};

export const PokeList: FC<PropsType> = (props): ReactElement => {
  const dispatch = useDispatch();
  const { pokes, loading } = useSelector<AppState, StateType>((state) => state);

  useEffect(() => {
    dispatch(getPokes());
    dispatch(cleanCurrentPokemon());
  }, [dispatch]);

  return (
    <>
      <div className="mainContainer">
        <div className="titleContainer">
          <h1>Pokemon List</h1>
        </div>
        {!loading ? (
          <>
            <div className="pokeListContainer">
              <List
                pagination={{
                  total: pokes.length,
                  defaultPageSize: 9,
                }}
                dataSource={pokes}
                renderItem={(poke) => (
                  <>
                    <Link key={Math.random()} to={`/${poke.name}`}>
                      <PokemonCard pokeName={poke.name} />
                    </Link>
                  </>
                )}
              />
            </div>
          </>
        ) : (
          <div className="spin">
            <Spin />
          </div>
        )}
      </div>
    </>
  );
};
