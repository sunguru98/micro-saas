import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

// Federated modules;
const AuthIndex = lazy(() => import("./components/AuthIndex"));
const MarketingIndex = lazy(() => import("./components/MarketingIndex"));

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path="/auth" component={AuthIndex} />
          <Route path="/" component={MarketingIndex} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
