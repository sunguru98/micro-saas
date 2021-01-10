import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

// Federated modules;
const AuthIndex = lazy(() => import("./components/AuthIndex"));
const MarketingIndex = lazy(() => import("./components/MarketingIndex"));
const DashboardIndex = lazy(() => import("./components/DashboardIndex"));

const App: React.FC = () => {
  const [user, setUser] = useState<null | { email: string }>(null);

  useEffect(() => {
    console.log("Current user ", user);
  }, [user]);

  return (
    <div>
      <Header signedIn={!!user} onSignOut={() => setUser(null)} />
      <Suspense fallback={<ProgressBar />}>
        <Switch>
          <Route
            path="/auth"
            render={(routeProps) => (
              <AuthIndex {...routeProps} onSignIn={setUser} />
            )}
          />
          <Route
            path="/dashboard"
            render={(rProps) => (
              <DashboardIndex {...rProps} signedIn={!!user} />
            )}
          />
          <Route path="/" component={MarketingIndex} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
