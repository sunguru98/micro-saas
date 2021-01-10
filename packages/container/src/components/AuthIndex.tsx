import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthIndex";
import { useHistory } from "react-router-dom";

const AuthIndex: React.FC = () => {
  const authRef = useRef<null | HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (authRef.current) {
      const { onParentNavigate } = mount(authRef.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname }: Location) => {
          history.location.pathname !== pathname && history.push(pathname);
        },
        onSignIn: () => {
          console.log("User Signed in");
          return {};
        },
      });

      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={authRef}></div>;
};

export default AuthIndex;
