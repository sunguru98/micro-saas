import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Route path="/" component={MarketingIndex} />
      </Switch>
    </div>
  );
};

export default App;
