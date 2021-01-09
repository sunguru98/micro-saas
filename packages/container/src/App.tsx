import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

// Federated modules;
const AuthIndex = lazy(() => import("./components/AuthIndex"));
const MarketingIndex = lazy(() => import("./components/MarketingIndex"));

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<ProgressBar />}>
        <Switch>
          <Route path="/auth" component={AuthIndex} />
          <Route path="/" component={MarketingIndex} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
