import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/pricing" component={Pricing}></Route>
      </Switch>
    </div>
  );
};

export default App;
