import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

// Federated modules;
import AuthIndex from "./components/AuthIndex";
import MarketingIndex from "./components/MarketingIndex";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthIndex} />
        <Route exact path="/" component={MarketingIndex} />
      </Switch>
    </div>
  );
};

export default App;
