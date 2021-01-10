import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App: React.FC<{ onSignIn: (user: { email: string }) => void }> = ({
  onSignIn,
}) => {
  return (
    <Switch>
      <Route
        exact
        path="/auth/signin"
        render={(routeProps) => <SignIn {...routeProps} onSignIn={onSignIn} />}
      />
      <Route
        exact
        path="/auth/signup"
        render={(routeProps) => <SignUp {...routeProps} onSignIn={onSignIn} />}
      />
    </Switch>
  );
};

export default App;
