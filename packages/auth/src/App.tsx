import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/auth/signin" component={SignIn} />
      <Route exact path="/auth/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
