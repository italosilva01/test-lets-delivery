import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ListSearch } from "pages/ListSearch";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path={`/search`} component={ListSearch} />

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
