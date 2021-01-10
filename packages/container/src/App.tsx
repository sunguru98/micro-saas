import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

// Federated modules;
const AuthIndex = lazy(() => import("./components/AuthIndex"));
const MarketingIndex = lazy(() => import("./components/MarketingIndex"));
const DashboardIndex = lazy(() => import("./components/DashboardIndex"));

const App: React.FC<RouteComponentProps> = ({ history }) => {
  const [user, setUser] = useState<null | { email: string }>(null);

  useEffect(() => {
    console.log("Current user ", user);
    if (user) history.push("/dashboard");
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
            render={(rProps) =>
              user ? (
                <DashboardIndex {...rProps} signedIn={!!user} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/" component={MarketingIndex} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(App);
