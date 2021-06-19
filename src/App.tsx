import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";

// import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <GlobalStyles /> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
