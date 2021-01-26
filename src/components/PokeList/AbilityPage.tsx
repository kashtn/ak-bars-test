import { Button } from "antd";
import { FC, ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { StateType } from "../../redux/reducer";
import { AppState } from "../../redux/store";
import { InfoAbilityType, InfoType, AbilitiyObjectType } from "../../types";

type PropsType = {
  children?: never;
};

export const AbilityPage: FC<PropsType> = (props): ReactElement => {
  type ParamsType = {
    abilityName: string;
  };

  const { abilityName } = useParams<ParamsType>();
  const history = useHistory();

  const { currentPokemon } = useSelector<AppState, StateType>((state) => state);

  const [currentAbility, setCurrentAbility] = useState<InfoAbilityType>();

  const [currentInfo, setCurrentInfo] = useState<InfoType>();

  useEffect(() => {
    async function getAbility() {
      const currentUrl = currentPokemon.abilities.find(
        (ability: AbilitiyObjectType) => {
          return ability.ability.name === abilityName;
        }
      );
      const response = await fetch(`${currentUrl.ability.url}`);
      const result = await response.json();
      setCurrentAbility(result);
    }
    getAbility();
  }, []);

  useEffect(() => {
    if (currentAbility) {
      const info = currentAbility.effect_entries.find(
        (infoLang: InfoType) => infoLang.language.name === "en"
      );
      setCurrentInfo(info);
    }
  }, [currentAbility]);

  return (
    <>
      <div className="abilityContainer">
        <h1>
          <b>{abilityName}</b>
        </h1>
        <h3>
          <b>Description:</b> {currentInfo && currentInfo.effect}
        </h3>

        <Button
          onClick={() => {
            history.push(`/${currentPokemon.name}`);
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
};
