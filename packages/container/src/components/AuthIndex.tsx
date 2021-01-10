import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthIndex";
import { RouteComponentProps, useHistory } from "react-router-dom";

const AuthIndex: React.FC<
  RouteComponentProps & { onSignIn: (user: { email: string }) => void }
> = ({ onSignIn: signInCallback }) => {
  const authRef = useRef<null | HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (authRef.current) {
      const { onParentNavigate } = mount(authRef.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname }: Location) => {
          history.location.pathname !== pathname && history.push(pathname);
        },
        onSignIn: (user: { email: string }) => {
          signInCallback(user);
        },
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={authRef}></div>;
};

export default AuthIndex;
