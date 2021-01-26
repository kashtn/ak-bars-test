import React from "react";
import { PokeList } from "../PokeList/PokeList";
import { PokemonPage } from "../PokeList/PokemonPage";
import { AbilityPage } from "../PokeList/AbilityPage";

import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" component={PokeList} exact />
            <Route path="/:name" component={PokemonPage} exact />
            <Route path="/:name/ability/:abilityName" component={AbilityPage} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
