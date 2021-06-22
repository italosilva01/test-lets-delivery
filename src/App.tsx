import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { ListSearch } from 'pages/ListSearch';
import { OnlyCharacter } from 'pages/OnlyCharacter';
import { Favorites } from 'pages/Favorites';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path={`/search`}>
            <ListSearch />
          </Route>
          <Route path={`/character/:id`}>
            <OnlyCharacter />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
